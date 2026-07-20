sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.b70sapui5.controller.View3", {
        onInit() {
        },

        onHistory3() {
            // this.getOwnerComponent().getRouter().navTo("RouteView2");
            history.go(-1);
        },
        onPageView4Grid() {
            this.getOwnerComponent().getRouter().navTo("RouteView4");
        }
    });
});