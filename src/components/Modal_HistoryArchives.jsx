import React, { useState } from 'react';
import { getArchivedGroups, deleteArchivedGroup } from '../utils/storage';
import {
  History,
  X,
  Calendar,
  DollarSign,
  Users,
  Coffee,
  Download,
  Trash2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export default function Modal_HistoryArchives({ isOpen, onClose, onRecreateFromHistory }) {
  const [archives, setArchives] = useState(getArchivedGroups());
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  if (!isOpen) return null;

  const handleDelete = (orderId) => {
    if (window.confirm('確定要刪除這筆歷史紀錄嗎？')) {
      deleteArchivedGroup(orderId);
      setArchives(getArchivedGroups());
    }
  };

  // 匯出 CSV 報帳檔
  const exportToCSV = (group) => {
    const orders = group.orders || [];
    let csvContent = '\uFEFF'; // UTF-8 BOM 避免 Excel 亂碼
    csvContent += `團購主題,${group.storeName} ${group.branchName || ''}\n`;
    csvContent += `結案時間,${new Date(group.archivedAt || group.createdAt).toLocaleString()}\n`;
    csvContent += `總外送費,$${group.deliveryFee || 0}\n`;
    csvContent += `總點餐人數,${orders.length} 人\n\n`;

    csvContent += '同仁暱稱,訂購飲品,容量規格,甜度,冰塊,加料,備註,飲品金額,分攤外送費,應付總額,已付款,已取餐\n';

    const deliveryFeePerPerson = orders.length > 0 ? Math.ceil((group.deliveryFee || 0) / orders.length) : 0;

    orders.forEach((ord) => {
      (ord.items || []).forEach((it) => {
        const toppingsText = (it.toppings || []).map((t) => t.name).join(' ');
        const total = it.price + (it.toppings || []).reduce((s, t) => s + (t.price || 0), 0) + deliveryFeePerPerson;
        csvContent += `"${ord.userName}","${it.itemName}","${it.size}","${it.sugar}","${it.ice}","${toppingsText}","${it.note || ''}",$${it.price},$${deliveryFeePerPerson},$${total},${ord.isPaid ? '是' : '否'},${ord.isPicked ? '是' : '否'}\n`;
      });
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `訂飲料報帳對帳表_${group.storeName}_${group.orderId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <History className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-base">歷史開團結案存檔</h2>
              <p className="text-[11px] text-slate-500">過往團購明細與核銷資料皆完整保存在此</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {archives.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                📂
              </div>
              <p className="text-sm font-bold text-slate-700">目前尚無歷史結案紀錄</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                每次開團結單送達並完成現場核銷後，於主揪後台點擊「結案歸檔此團」，明細便會永久留存在此。
              </p>
            </div>
          ) : (
            archives.map((group) => {
              const isExpanded = expandedOrderId === group.orderId;
              const orders = group.orders || [];
              const totalAmount = orders.reduce((sum, ord) => {
                const drinks = (ord.items || []).reduce(
                  (s, it) => s + it.price + (it.toppings || []).reduce((ts, t) => ts + (t.price || 0), 0),
                  0
                );
                return sum + drinks;
              }, 0) + Number(group.deliveryFee || 0);

              return (
                <div
                  key={group.orderId}
                  className="border border-slate-200 rounded-2xl p-4 bg-white shadow-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-800 text-sm">
                          {group.storeName} {group.branchName && `(${group.branchName})`}
                        </h3>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          已結案
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-2">
                        <span>📅 {new Date(group.archivedAt || group.createdAt).toLocaleDateString()}</span>
                        <span>👥 {orders.length} 人點餐</span>
                        <span className="font-bold text-slate-700">總金額: ${totalAmount}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => exportToCSV(group)}
                        title="匯出 Excel / CSV 報帳檔"
                        className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5" /> CSV 報帳
                      </button>

                      {onRecreateFromHistory && (
                        <button
                          onClick={() => {
                            onClose();
                            onRecreateFromHistory(group);
                          }}
                          title="複製這家菜單再次開團"
                          className="px-2.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> 再次開團
                        </button>
                      )}

                      <button
                        onClick={() => setExpandedOrderId(isExpanded ? null : group.orderId)}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => handleDelete(group.orderId)}
                        title="刪除此紀錄"
                        className="p-1.5 text-rose-400 hover:text-rose-600 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 展開之點餐明細 */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                      <div className="font-bold text-slate-700">點餐核銷名冊：</div>
                      <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
                        {orders.map((ord, idx) => (
                          <div key={idx} className="p-2.5 flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-800">{ord.userName}</span>：
                              {ord.items?.map((it, i) => (
                                <span key={i} className="text-slate-600 ml-1">
                                  {it.itemName} ({it.size}) · {it.sugar}/{it.ice}
                                  {it.toppings?.length > 0 && ` +${it.toppings.map((t) => t.name).join(' ')}`}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${ord.isPaid ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                {ord.isPaid ? '已付款' : '未付款'}
                              </span>
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${ord.isPicked ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                                {ord.isPicked ? '已取餐' : '未取'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
