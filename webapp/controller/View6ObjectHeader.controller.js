sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.b70sapui5.controller.View6ObjectHeader", {
        onInit() {
        },

        onNavBack() {
            history.go(-1);
        },

        // onPageView6() {
        //     this.getOwnerComponent().getRouter().navTo("RouteView7");
        // }
        
    });
});