sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.b70sapui5.controller.View5SimpleForm", {
        onInit() {
        },

        onNavBack() {
            history.go(-1);
        },

        onPageView5Grid() {
            this.getOwnerComponent().getRouter().navTo("RouteView6");
        }
        
    });
});