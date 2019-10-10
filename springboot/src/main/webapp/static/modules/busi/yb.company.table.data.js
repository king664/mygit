// 初始化产品-原辅料信息表
var g_dataList = {};
var g_tblName = {};
function initCpyflTbl(tableId, data) {
	   var cpyflColModel = [
			{ label: '样本工段', name: 'ybGd', width: 120},
			{ label: '样本批次', name: 'ypBatch', width: 90},
			{ label: '取样时间', name: 'ypQysj', width: 90},
			{ label: '产品序号', name: 'cpOrderNo', width: 90},
			{ label: '产品名称', name: 'cpName', width: 120},
			{ label: '年生产能力', name: 'cpNscnl', width: 120},
			{ label: '计量单位', name: 'cpNscnlDw', width: 90},
			{ label: '实际产量', name: 'cpClzqsjcl', width: 120},
			{ label: '计量单位', name: 'cpClzqsjclDw', width: 90},
			{ label: '原辅料序号', name: 'yflOrderNo', width: 100},
			{ label: '原辅料名称', name: 'yflName', width: 100},
			{ label: '实际用量', name: 'yflClzqsjyl', width: 120},
			{ label: '计量单位', name: 'yflClzqsjylDw', width: 90},
            {
                label: '操作', name: '', index: 'operate', width: 100,
                formatter: function (cellvalue, options, rowObject) {
                	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybcpyflinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybcpyflinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                	// var detail='<a href="#" class="btn btn-xs btn-success" onclick=\"btn_edit(2, "' + rowObject.id + '")\"><i class="fa fa-file-text-o"></i></a>';
                    return detail;
                },
            }
		 ];
		if (!data) {
			data = [];
		}
		g_dataList["busiybcpyflinfo"] = data;
		g_tblName["busiybcpyflinfo"] = tableId;
	initGrid(tableId, cpyflColModel, data, "主要产品、原辅材料调查表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybcpyflinfo')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化 废水产污系数表
var busiybfscwxsjsbDataList = null;
function initFsCwxsJsbTbl(tableId, data) {
	var fsCwxsJsbModel = [
			{ label: '样本工段', name: 'ybGd', width: 120}, 
			{ label: '采样点位', name: 'cyDw', width: 120}, 
			{ label: '样品批次', name: 'ypBatch', width: 120}, 
			{ label: '样品取样时间', name: 'ypQysj', width: 120}, 
			{ label: '指标名称', name: 'attrName', width: 120}, 
			{ label: '计量单位', name: 'jldw', width: 120}, 
			{ label: '化学需氧量', name: 'valHxxyl', width: 120}, 
			{ label: '氨氮', name: 'valAd', width: 120}, 
			{ label: '总磷', name: 'valZl', width: 120}, 
			{ label: '总氮', name: 'valZd', width: 120}, 
			{ label: '石油类', name: 'valSyl', width: 120}, 
			{ label: '挥发酚', name: 'valHff', width: 120}, 
			{ label: '氰化物', name: 'valQhw', width: 120}, 
			{ label: '汞', name: 'valHg', width: 120}, 
			{ label: '镉', name: 'valCd', width: 120}, 
			{ label: '铅', name: 'valPb', width: 120}, 
			{ label: '铬', name: 'valCr', width: 120}, 
			{ label: '砷', name: 'valAs', width: 120}, 
			{ label: '莠去津', name: 'valAtrazine', width: 120},
			{ label: '吡虫啉', name: 'valImidacloprid', width: 120},
			{ label: '多菌灵', name: 'valCarbendazim', width: 120},
			{ label: '铜', name: 'valCu', width: 120},
			{ label: '锑', name: 'valSb', width: 120},
			{ label: '锌', name: 'valZn', width: 120},
			{ label: '六价铬', name: 'valChromium', width: 120},
			{ label: '锰', name: 'valMn', width: 120},
			{ label: '悬浮物', name: 'valXfw', width: 120},
			{ label: '钴', name: 'valCo', width: 120},
			{ label: '镍', name: 'valNi', width: 120},
			{ label: '锡', name: 'valSn', width: 120},
			{ label: '铝', name: 'valAl', width: 120},
			{ label: '氯化物', name: 'valXcl', width: 120},
			{ label: '硫化物', name: 'valXs', width: 120},
			{ label: '银', name: 'valAg', width: 120},
			{ label: '含盐量', name: 'valNacl', width: 120},
			{ label: '高锰酸钾指数', name: 'valKmno4', width: 120},
			{ label: '其他', name: 'valOther', width: 120},
            {
                label: '操作', name: '', index: 'operate', width: 145,
                formatter: function (cellvalue, options, rowObject) {
                	
                	var disabledLabel = " disabled='true' "
                    	if (rowObject.creator == curUserId) {
                    		disabledLabel = "";
                    	}
                    	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybfscwxsjsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                        detail += "&nbsp;";
                    	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybfscwxsjsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                        
                    return detail;
                },
            }/**, 
			{ label: '排序序号', name: 'orderNo', width: 120}, 
			{ label: '创建人', name: 'creator', width: 120}, 
			{ label: '创建时间', name: 'createDate', width: 120}, 
			{ label: '更新人', name: 'updator', width: 120}, 
			{ label: '更新时间', name: 'updateDate', width: 120}**/
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybfscwxsjsb"] = data;
	g_tblName["busiybfscwxsjsb"] = tableId;
	initGrid(tableId, fsCwxsJsbModel, data, "废水污染物产污系数计算表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybfscwxsjsb')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化废水治理设施表
function initFsZlssInfoTbl(tableId, data) {
	var fsZlssInfoModel = [
		{ label: '废水类型名称', name: 'fsType', width: 120}, 
		{ label: '治理设施名称', name: 'zlssName', width: 120}, 
		{ label: '设计处理能力', name: 'sjclnl', width: 120}, 
		{ label: '年运行小时数', name: 'NYxxs', width: 120}, 
		{ label: '年实际处理水量', name: 'NSjclsl', width: 120}, 
		{ label: '排放方式', name: 'pffsName', width: 120}, 
		{ label: '运行参数1', name: 'param1', width: 120}, 
		{ label: '运行参数2', name: 'param2', width: 120}, 
		{ label: '运行参数3', name: 'param3', width: 120}, 
		{ label: '治理设施实际运行效率', name: 'zlssSjYxl', width: 240}, 
		// { label: '排序序号', name: 'orderNo', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 80,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybfszlssinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybfszlssinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybfszlssinfo"] = data;
	g_tblName["busiybfszlssinfo"] = tableId;
	initGrid(tableId, fsZlssInfoModel, data, "废水治理设施信息表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybfszlssinfo')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化废水排放量核算表
function initFsPflHsbTbl(tableId, data) {
	var fsPflhsModel = [
		{ label: '样本工段', name: 'ybGd', width: 120}, 
		{ label: '采样点位', name: 'cyDw', width: 120}, 
		{ label: '样品批次', name: 'ypBatch', width: 120}, 
		{ label: '样品取样时间', name: 'ypQysj', width: 120}, 
		{ label: '指标名称', name: 'attrName', width: 120}, 
		{ label: '计量单位', name: 'jldw', width: 120}, 
		{ label: '化学需氧量', name: 'valHxxyl', width: 120}, 
		{ label: '氨氮', name: 'valAd', width: 120}, 
		{ label: '总磷', name: 'valZl', width: 120}, 
		{ label: '总氮', name: 'valZd', width: 120}, 
		{ label: '石油类', name: 'valSyl', width: 120}, 
		{ label: '挥发酚', name: 'valHff', width: 120}, 
		{ label: '氰化物', name: 'valQhw', width: 120}, 
		{ label: '汞', name: 'valHg', width: 120}, 
		{ label: '镉', name: 'valCd', width: 120}, 
		{ label: '铅', name: 'valPb', width: 120}, 
		{ label: '铬', name: 'valCr', width: 120}, 
		{ label: '砷', name: 'valAs', width: 120}, 
		{ label: '莠去津', name: 'valAtrazine', width: 120},
		{ label: '吡虫啉', name: 'valImidacloprid', width: 120},
		{ label: '多菌灵', name: 'valCarbendazim', width: 120},
		{ label: '铜', name: 'valCu', width: 120},
		{ label: '锑', name: 'valSb', width: 120},
		{ label: '锌', name: 'valZn', width: 120},
		{ label: '六价铬', name: 'valChromium', width: 120},
		{ label: '锰', name: 'valMn', width: 120},
		{ label: '悬浮物', name: 'valXfw', width: 120},
		{ label: '钴', name: 'valCo', width: 120},
		{ label: '镍', name: 'valNi', width: 120},
		{ label: '锡', name: 'valSn', width: 120},
		{ label: '铝', name: 'valAl', width: 120},
		{ label: '氯化物', name: 'valXcl', width: 120},
		{ label: '硫化物', name: 'valXs', width: 120},
		{ label: '银', name: 'valAg', width: 120},
		{ label: '含盐量', name: 'valNacl', width: 120},
		{ label: '高锰酸钾指数', name: 'valKmno4', width: 120},
		{ label: '其他', name: 'valOther', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 145,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybfspflhsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybfspflhsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/**, 
		{ label: '排序序号', name: 'orderNo', width: 120}, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}
		**/
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybfspflhsb"] = data;
	g_tblName["busiybfspflhsb"] = tableId;
	initGrid(tableId, fsPflhsModel, data, "废水污染物排放量核算表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybfspflhsb')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化 废气产污系数表
function initFqCwxsJsbTbl(tableId, data) {
	
	var fqCwxsJsbModel = [
		{ label: '样本工段', name: 'ybGd', width: 120}, 
		{ label: '采样点位', name: 'cyDw', width: 120}, 
		{ label: '样品批次', name: 'ypBatch', width: 120}, 
		{ label: '取样时间', name: 'ypQysj', width: 120}, 
		{ label: '指标', name: 'attrName', width: 120}, 
		{ label: '计量单位', name: 'jldw', width: 120}, 
		{ label: '二氧化硫', name: 'valSo2', width: 120}, 
		{ label: '氮氧化物', name: 'valDyhw', width: 120}, 
		{ label: '颗粒物', name: 'valKlw', width: 120}, 
		{ label: '氨', name: 'valAn', width: 120}, 
		{ label: '汞', name: 'valHg', width: 120}, 
		{ label: '镉', name: 'valCd', width: 120}, 
		{ label: '铅', name: 'valPb', width: 120}, 
		{ label: '铬', name: 'valCr', width: 120}, 
		{ label: '砷', name: 'valAs', width: 120}, 
		{ label: '氮氧化物（低氮燃烧法，20%<煤炭干燥无灰基挥发分',name: 'valNo20b37', width: 200},
		{ label: '氮氧化物（低氮燃烧法，煤炭干燥无灰基挥发分≤10%',name: 'valNolt10a', width: 200},
		{ label: '氮氧化物（低氮燃烧法，10%<煤炭干燥无灰基挥发分',name: 'valNo1020a', width: 200},
		{ label: '氮氧化物（低氮燃烧法，煤炭干燥无灰基挥发分>37%',name: 'valNogt37a', width: 200},
		{ label: '氮氧化物（低氮燃烧法-SNCR，煤炭干燥无灰基挥发',name: 'valSncrlt10a', width: 200},
		{ label: '氮氧化物（低氮燃烧法-SNCR，10%<煤炭干燥无灰基',name: 'valSncr1020a', width: 200},
		{ label: '氮氧化物（低氮燃烧法-SNCR，20%<煤炭干燥无灰基',name: 'valSncr2037a', width: 200},
		{ label: '氮氧化物（低氮燃烧法-SNCR，煤炭干燥无灰基挥发',name: 'valSncrgt37', width: 200},
		{ label: '氮氧化物（10%<煤炭干燥无灰基挥发分≤20%）',name: 'valNo1020b', width: 200},
		{ label: '氮氧化物（20%<煤炭干燥无灰基挥发分≤37%）',name: 'valNo2037', width: 200},
		{ label: '氮氧化物（煤炭干燥无灰基挥发分≤10%）',name: 'valNolt10b', width: 200},
		{ label: '氮氧化物（煤炭干燥无灰基挥发分>37%）',name: 'valNogt37b', width: 200},
		{ label: '氮氧化物（SNCR，煤炭干燥无灰基挥发分分≤10%）',name: 'valSncrlt10b', width: 200},
		{ label: '氮氧化物（SNCR，10%<煤炭干燥无灰基挥发分≤20%）',name: 'valSncr1020b', width: 200},
		{ label: '氮氧化物（SNCR，20%<煤炭干燥无灰基挥发分≤37%）',name: 'valSncr2037b', width: 200},
		{ label: '氮氧化物（SNCR，煤炭干燥无灰基挥发分>37%）',name: 'valSncrgt37b', width: 200},
		{ label: '氮氧化物（SNCR，煤炭干燥无灰基挥发分≤10%）',name: 'valSncrlt10c', width: 200},
		{ label: '氮氧化物（SNCR）',name: 'valSncr', width: 120},
		{ label: '氮氧化物（低氮燃烧法）',name: 'valNo', width: 120},
		{ label: '二氧化硫(无炉内脱硫)',name: 'valSoa', width: 120},
		{ label: '二氧化硫(有炉内脱硫）',name: 'valSob', width: 120},
		{ label: '二氧化硫（烟煤)',name: 'valSoc', width: 120},
		{ label: '二氧化硫（褐煤，无炉内脱硫）',name: 'valSod', width: 120},
		{ label: '二氧化硫（褐煤，有炉内脱硫）',name: 'valSoe', width: 120},
		{ label: '二氧化硫（烟煤，无炉内脱硫）',name: 'valSof', width: 120},
		{ label: '二氧化硫（烟煤，有炉内脱硫）',name: 'valSog', width: 120},
		{ label: '二氧化硫（无烟煤，无炉内脱硫）',name: 'valSoh', width: 120},
		{ label: '二氧化硫（无烟煤，有炉内脱硫）',name: 'valSoi', width: 120},
		{ label: '二氧化硫（烟煤，无炉内脱硫）',name: 'valSoj', width: 120},
		{ label: '二氧化硫（烟煤，有炉内脱硫）',name: 'valSok', width: 120},
		{ label: '二氧化硫（无烟煤，无炉内脱硫）',name: 'valSol', width: 120},
		{ label: '二氧化硫（无烟煤，有炉内脱硫）',name: 'valSom', width: 120},
		{ label: '颗粒物（烟煤）',name: 'valKlwa', width: 120},
		{ label: '颗粒物（无烟煤）',name: 'valKlwb', width: 120},
		{ label: '颗粒物（褐煤）',name: 'valKlwc', width: 120},
		{ label: '颗粒物（无炉内脱硫）',name: 'valKlwd', width: 120},
		{ label: '颗粒物（有炉内脱硫）',name: 'valKlwe', width: 120},
		{ label: '硫化物',name: 'valXs', width: 120},
		{ label: '氟化物',name: 'valXcl', width: 120},
		{ label: '氯化氢',name: 'valHcl', width: 120},
		{ label: '硫化氢',name: 'valHs', width: 120},
		{ label: '总钡',name: 'valBa', width: 120},
		{ label: '二硫化碳',name: 'valCs', width: 120},
		{ label: '硫酸雾',name: 'valLsw', width: 120},
		{ label: '沥青烟',name: 'valLqy', width: 120},
		{ label: '非甲烷总烃',name: 'valFjwzj', width: 120},
		{ label: '气态NMP',name: 'valNmp', width: 120},
		{ label: '镍及其化合物',name: 'valNis', width: 120},
		{ label: '铅及其化合物',name: 'valPbs', width: 120},
		{ label: '甲醛',name: 'valHcho', width: 120},
		{ label: '异丙醇',name: 'valIsopropanol', width: 120},
		{ label: '锑',name: 'valSb', width: 120},
		{ label: '镍',name: 'valNi', width: 120},
		{ label: '甲醇',name: 'valMethanol', width: 120},
		{ label: '苯并芘',name: 'valBap', width: 120},
		{ label: '挥发性有机物', name: 'valVocs', width: 120},
		{ label: '其他', name: 'valOther', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 130,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybfqcwxsjsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybfqcwxsjsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '排序序号', name: 'orderNo', width: 120}, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybfqcwxsjsb"] = data;
	g_tblName["busiybfqcwxsjsb"] = tableId;
	initGrid(tableId, fqCwxsJsbModel, data, "废气污染物产污系数计算表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybfqcwxsjsb')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化废气治理设施表
function initFqZlssInfoTbl(tableId, data) {
	var fqZlssInfoModel = [
		{ label: '工段名称', name: 'ybGd', width: 120}, 
		{ label: '类别', name: 'fqType', width: 120}, 
		{ label: '指标', name: 'attrName', width: 120}, 
		{ label: '计量单位', name: 'jldw', width: 120}, 
		{ label: '一级处理', name: 'clLevel1', width: 120}, 
		{ label: '二级处理', name: 'clLevel2', width: 120}, 
		{ label: '三级处理', name: 'clLevel3', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 80,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybfqzlssinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybfqzlssinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '排序序号', name: 'orderNo', width: 120}, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybfqzlssinfo"] = data;
	g_tblName["busiybfqzlssinfo"] = tableId;
	initGrid(tableId, fqZlssInfoModel, data, "废气治理设施信息表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybfqzlssinfo')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化废气排放量核算表
function initFqPflHsbTbl(tableId, data) {
	var fqPflhsModel = [
		{ label: '样本工段', name: 'ybGd', width: 120}, 
		{ label: '采样点位', name: 'cyDw', width: 120}, 
		{ label: '样品批次', name: 'ypBatch', width: 120}, 
		{ label: '取样时间', name: 'ypQysj', width: 120}, 
		{ label: '指标', name: 'attrName', width: 120}, 
		{ label: '计量单位', name: 'jldw', width: 120}, 
		{ label: '二氧化硫', name: 'valSo2', width: 120}, 
		{ label: '氮氧化物', name: 'valDyhw', width: 120}, 
		{ label: '颗粒物', name: 'valKlw', width: 120}, 
		{ label: '氨', name: 'valAn', width: 120}, 
		{ label: '汞', name: 'valHg', width: 120}, 
		{ label: '镉', name: 'valCd', width: 120}, 
		{ label: '铅', name: 'valPb', width: 120}, 
		{ label: '铬', name: 'valCr', width: 120}, 
		{ label: '砷', name: 'valAs', width: 120},
		{ label: '氮氧化物（低氮燃烧法，20%<煤炭干燥无灰基挥发分',name: 'valNo20b37', width: 120},
		{ label: '氮氧化物（低氮燃烧法，煤炭干燥无灰基挥发分≤10%',name: 'valNolt10a', width: 120},
		{ label: '氮氧化物（低氮燃烧法，10%<煤炭干燥无灰基挥发分',name: 'valNo1020a', width: 120},
		{ label: '氮氧化物（低氮燃烧法，煤炭干燥无灰基挥发分>37%',name: 'valNogt37a', width: 120},
		{ label: '氮氧化物（低氮燃烧法-SNCR，煤炭干燥无灰基挥发',name: 'valSncrlt10a', width: 120},
		{ label: '氮氧化物（低氮燃烧法-SNCR，10%<煤炭干燥无灰基',name: 'valSncr1020a', width: 120},
		{ label: '氮氧化物（低氮燃烧法-SNCR，20%<煤炭干燥无灰基',name: 'valSncr2037a', width: 120},
		{ label: '氮氧化物（低氮燃烧法-SNCR，煤炭干燥无灰基挥发',name: 'valSncrgt37', width: 120},
		{ label: '氮氧化物（10%<煤炭干燥无灰基挥发分≤20%）',name: 'valNo1020b', width: 120},
		{ label: '氮氧化物（20%<煤炭干燥无灰基挥发分≤37%）',name: 'valNo2037', width: 120},
		{ label: '氮氧化物（煤炭干燥无灰基挥发分≤10%）',name: 'valNolt10b', width: 120},
		{ label: '氮氧化物（煤炭干燥无灰基挥发分>37%）',name: 'valNogt37b', width: 120},
		{ label: '氮氧化物（SNCR，煤炭干燥无灰基挥发分分≤10%）',name: 'valSncrlt10b', width: 120},
		{ label: '氮氧化物（SNCR，10%<煤炭干燥无灰基挥发分≤20%）',name: 'valSncr1020b', width: 120},
		{ label: '氮氧化物（SNCR，20%<煤炭干燥无灰基挥发分≤37%）',name: 'valSncr2037b', width: 120},
		{ label: '氮氧化物（SNCR，煤炭干燥无灰基挥发分>37%）',name: 'valSncrgt37b', width: 120},
		{ label: '氮氧化物（SNCR，煤炭干燥无灰基挥发分≤10%）',name: 'valSncrlt10c', width: 120},
		{ label: '氮氧化物（SNCR）',name: 'valSncr', width: 120},
		{ label: '氮氧化物（低氮燃烧法）',name: 'valNo', width: 120},
		{ label: '二氧化硫(无炉内脱硫)',name: 'valSoa', width: 120},
		{ label: '二氧化硫(有炉内脱硫）',name: 'valSob', width: 120},
		{ label: '二氧化硫（烟煤)',name: 'valSoc', width: 120},
		{ label: '二氧化硫（褐煤，无炉内脱硫）',name: 'valSod', width: 120},
		{ label: '二氧化硫（褐煤，有炉内脱硫）',name: 'valSoe', width: 120},
		{ label: '二氧化硫（烟煤，无炉内脱硫）',name: 'valSof', width: 120},
		{ label: '二氧化硫（烟煤，有炉内脱硫）',name: 'valSog', width: 120},
		{ label: '二氧化硫（无烟煤，无炉内脱硫）',name: 'valSoh', width: 120},
		{ label: '二氧化硫（无烟煤，有炉内脱硫）',name: 'valSoi', width: 120},
		{ label: '二氧化硫（烟煤，无炉内脱硫）',name: 'valSoj', width: 120},
		{ label: '二氧化硫（烟煤，有炉内脱硫）',name: 'valSok', width: 120},
		{ label: '二氧化硫（无烟煤，无炉内脱硫）',name: 'valSol', width: 120},
		{ label: '二氧化硫（无烟煤，有炉内脱硫）',name: 'valSom', width: 120},
		{ label: '颗粒物（烟煤）',name: 'valKlwa', width: 120},
		{ label: '颗粒物（无烟煤）',name: 'valKlwb', width: 120},
		{ label: '颗粒物（褐煤）',name: 'valKlwc', width: 120},
		{ label: '颗粒物（无炉内脱硫）',name: 'valKlwd', width: 120},
		{ label: '颗粒物（有炉内脱硫）',name: 'valKlwe', width: 120},
		{ label: '硫化物',name: 'valXs', width: 120},
		{ label: '氟化物',name: 'valXcl', width: 120},
		{ label: '氯化氢',name: 'valHcl', width: 120},
		{ label: '硫化氢',name: 'valHs', width: 120},
		{ label: '总钡',name: 'valBa', width: 120},
		{ label: '二硫化碳',name: 'valCs', width: 120},
		{ label: '硫酸雾',name: 'valLsw', width: 120},
		{ label: '沥青烟',name: 'valLqy', width: 120},
		{ label: '非甲烷总烃',name: 'valFjwzj', width: 120},
		{ label: '气态NMP',name: 'valNmp', width: 120},
		{ label: '镍及其化合物',name: 'valNis', width: 120},
		{ label: '铅及其化合物',name: 'valPbs', width: 120},
		{ label: '甲醛',name: 'valHcho', width: 120},
		{ label: '异丙醇',name: 'valIsopropanol', width: 120},
		{ label: '锑',name: 'valSb', width: 120},
		{ label: '镍',name: 'valNi', width: 120},
		{ label: '甲醇',name: 'valMethanol', width: 120},
		{ label: '苯并芘',name: 'valBap', width: 120},
		{ label: '挥发性有机物', name: 'valVocs', width: 120},
		{ label: '其他', name: 'valOther', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 130,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybfqpflhsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybfqpflhsb', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '排序序号', name: 'orderNo', width: 120}, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybfqpflhsb"] = data;
	g_tblName["busiybfqpflhsb"] = tableId;
	initGrid(tableId, fqPflhsModel, data, "废气污染物排放量核算表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybfqpflhsb')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化一般固废表
function initGfInfoTbl(tableId, data) {
	var gfInfoModel = [
		{ label: '序号', name: 'orderNo', width: 120},
		// { label: '属性', name: 'attrName', width: 120}, 
		{ label: '固体废物名称', name: 'gfName', width: 120}, 
		{ label: '生产环节', name: 'scHj', width: 120}, 
		{ label: '形态', name: 'xt', width: 120}, 
		{ label: '主要成分', name: 'zycf', width: 120}, 
		{ label: '产生量', name: 'csl', width: 120}, 
		{ label: '产生量计量单位', name: 'cslDw', width: 120}, 
		{ label: '产生系数', name: 'csxs', width: 120}, 
		{ label: '产生系数计量单位', name: 'csxsDw', width: 120}, 
		{ label: '处置情况', name: 'czqk', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 80,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybgfinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybgfinfo', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybgfinfo"] = data;
	g_tblName["busiybgfinfo"] = tableId;
	initGrid(tableId, gfInfoModel, data, "固体废物调查表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybgfinfo')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化危险固废表
function initGfWfTbl(tableId, data) {
	var gfWfModel = [
		{ label: '序号', name: 'orderNo', width: 120}, 
		// { label: '属性', name: 'attrName', width: 120}, 
		{ label: '危险废物名称', name: 'wfName', width: 120}, 
		{ label: '危险废物代码', name: 'wfCode', width: 120}, 
		{ label: '生产环节', name: 'scHj', width: 120}, 
		{ label: '形态', name: 'xt', width: 120}, 
		{ label: '主要成分', name: 'zycf', width: 120}, 
		{ label: '产生量', name: 'csl', width: 120}, 
		{ label: '产生量计量单位', name: 'cslDw', width: 120}, 
		{ label: '产生系数', name: 'csxs', width: 120}, 
		{ label: '产生系数计量单位', name: 'csxsDw', width: 120}, 
		{ label: '处置情况', name: 'czqk', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 80,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybgfwf', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybgfwf', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybgfwf"] = data;
	g_tblName["busiybgfwf"] = tableId;
	initGrid(tableId, gfWfModel, data, "危险固体废物调查表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybgfwf')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

// 初始化核算结果汇总表
function initHsjgHzTbl(tableId, data) {
	var hsjgHzModel = [
		{ label: '“四同”名称', name: 'stName', width: 120}, 
		{ label: '工段名称', name: 'ybGd', width: 110}, 
		{ label: '污染物', name: 'wrwName', width: 110}, 
		{ label: '个体产污系数', name: 'gtCwxs', width: 120}, 
		{ label: '个体产污系数计量单位', name: 'gtCwxsDw', width: 120}, 
		{ label: '治理技术名称', name: 'zljsName', width: 120}, 
		{ label: '处理效率（%）', name: 'clxl', width: 120}, 
		{ label: '运行参数一', name: 'param1', width: 120}, 
		{ label: '计量单位一', name: 'param1Dw', width: 120}, 
		{ label: '运行参数二', name: 'param2', width: 120}, 
		{ label: '计量单位二', name: 'param2Dw', width: 120}, 
		{ label: '运行参数三', name: 'param3', width: 120}, 
		{ label: '计量单位三', name: 'param3Dw', width: 120},
        {
            label: '操作', name: '', index: 'operate', width: 100,
            formatter: function (cellvalue, options, rowObject) {
            	
            	var disabledLabel = " disabled='true' "
                	if (rowObject.creator == curUserId) {
                		disabledLabel = "";
                	}
                	var detail = "<a href='#' " + disabledLabel + " title='修改' class='btn btn-xs btn-success' onclick=\"btn_edit('busiybhsjghz', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-file-text-o'></i></a>"; 
                    detail += "&nbsp;";
                	detail += "<a href='#' " + disabledLabel + " title='删除' class='btn btn-xs btn-danger' onclick=\"btn_del('busiybhsjghz', '" + rowObject.id + "', " + (disabledLabel != "") + ")\"> <i class='fa fa-trash'></i></a>"; 
                    
                return detail;
            },
        }/*, 
		{ label: '行业大类', name: 'hydl', width: 120}, 
		{ label: '行业中类', name: 'hyzl', width: 120}, 
		{ label: '行业小类', name: 'hyxl', width: 120}, 
		{ label: '排序序号', name: 'orderNo', width: 120}, 
		{ label: '创建人', name: 'creator', width: 120}, 
		{ label: '创建时间', name: 'createDate', width: 120}, 
		{ label: '更新人', name: 'updator', width: 120}, 
		{ label: '更新时间', name: 'updateDate', width: 120}, */
	];
	if (!data) {
		data = [];
	}
	g_dataList["busiybhsjghz"] = data;
	g_tblName["busiybhsjghz"] = tableId;
	initGrid(tableId, hsjgHzModel, data, "个体产污系数与排放量核算结果汇总表", false, "auto");
	var capObj = $("#gbox_" + tableId).find(".ui-jqgrid-caption");
	capObj.append("<div class='pull-right' style='padding-right: 20px;'><button class='btn btn-sm btn-primary' onclick=\"createYbChildObj('busiybhsjghz')\"><i class='fa fa-plus'></i> 添加</button></div>");
}

function btn_edit(tbObj, id, disabledFlag) {
	if (disabledFlag) {
		return;
	}
	var url = prefixUrl + '/busi/' + tbObj + "/" + id + "/update";
	// console.log("btn_edit", tbObj, id, url);
	top.layer.open({
	    type: 2,  
		area : [ "800px", "600px" ],
		title : "修改",
        maxmin: true, //开启最大化最小化按钮
	    content: url ,
	    btn: ['确定', '关闭'],
	    yes: function(index, layero){
	    	 var body = top.layer.getChildFrame('body', index);
	         var iframeWin = layero.find('iframe')[0]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
	         var formValues = getFormValue(iframeWin.contentDocument.forms[0]);

	         //文档地址
	         //http://www.layui.com/doc/modules/layer.html#use
	         iframeWin.contentWindow.doSubmit(function()
	         {
	        	 //判断逻辑并关闭
       	         setTimeout(function(){top.layer.close(index)}, 100);//延时0.1秒，对应360 7.1版本bug
	        	 //刷新表单
	        	 // refreshTable(gridId);
       	   // console.log(formValues, g_dataList[tbObj]);
            	 for (var i=0; g_dataList[tbObj] && i < g_dataList[tbObj].length; i++) {
            		 var curData = g_dataList[tbObj][i];
            		 if (formValues.id == curData.id) {
            			 for (var key in curData) {
            				 if (formValues[key] && curData[key] != formValues[key]) {
            					 g_dataList[tbObj][i][key] = formValues[key];
            	            	 $("#" + g_tblName[tbObj]).jqGrid('setCell', id, key, formValues[key]);
            				 }
            			 }
            			 break;
            		 }
            	 }
            	// console.log(formValues, g_dataList[tbObj]);
	         });
			
		  },
		  cancel: function(index){ 
			  
		  }
	}); 	
}

function btn_del(tbObj, id, disabledFlag) {
	if (disabledFlag) {
		return;
	}
	var url = prefixUrl + '/busi/' + tbObj + "/" + id + "/delete";
	// console.log("btn_del", tbObj, id, url);
	var msg = "您确定要删除该信息么，请谨慎操作！";
	swal({
         title: "提示",
         text: msg,
         type: "warning",
         showCancelButton: true,
         confirmButtonColor: "#DD6B55",
         confirmButtonText: "确定",
         closeOnConfirm: false,
         cancelButtonText: "取消",
     }, function () {
			$.ajax({
				url : url,
				type : 'post',
				data : {
					id : id
				},
				cache : false,
				success : function(d) {
					if (d.ret==0) {
						var msg = d.msg;
					    swal("提示！", msg, "success");
					    //刷新表单
   	            	 	$("#" + g_tblName[tbObj]).jqGrid('delRowData', id);
			            // refreshTable(gridId);
					}else{
						var msg = d.msg;
					    swal("提示！", msg, "error");
					}
				}
			});
     });
}
function getFormValue(form) {
	var formId = form.getAttribute("id");
	var retVals = {};    
	var tagElements = form.getElementsByTagName('input');    
	for (var j = 0; j < tagElements.length; j++) {
		var attrName = tagElements[j].id;
		var attrValue = $(tagElements[j]).val();
		retVals[attrName] = attrValue;
	}  
	return retVals;    

}
