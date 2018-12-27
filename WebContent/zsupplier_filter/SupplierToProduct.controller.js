sap.ui.controller("zsupplier_filter.SupplierToProduct", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zsupplier_filter.SupplierToProduct
*/
	onInit: function() {
        var url = "proxy/https/services.odata.org/Northwind/Northwind.svc/";     
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zsupplier_filter.SupplierToProduct
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zsupplier_filter.SupplierToProduct
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zsupplier_filter.SupplierToProduct
*/
//	onExit: function() {
//
//	}
	
	onSupplierChange : function(){
		//get selected SupplierID
		var oselect = this.getView().byId("idSupplierSelect");
		debugger;
		var selectSupplierID = oselect.getSelectedItem().getText();
		// filter on table
		
		var filters = [];
		
		var ofilter = new sap.ui.model.Filter({ path : 'SupplierID', operator : 'EQ', value1 : selectSupplierID});
		
		filters.push(ofilter);
		
		this.getView().byId("idTable").getBinding("items").filter(filters);
		
		
	}

});