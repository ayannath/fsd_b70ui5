sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.b70sapui5.controller.View2", {
        onInit() {
        },

        onButtonPress2() {
            // Handle button press event
            // this.getOwnerComponent().getRouter().navTo("RouteMain");
            // Go back to the previous page in the browser history
            history.go(-1);
        },

        onSubmit() {
            let name = this.getView().byId("idIpName").getValue();
            let msg = "Welcome to SAP UI5, " + name;
            this.getView().byId("idTxtWelcome").setText(msg);
            this.getView().byId("idBtnSubmit").setType("Reject");
            this.getView().byId("idTxtWelcome").setTextAlign("Left");
        },
        onNextPage3() {
            this.getOwnerComponent().getRouter().navTo("RouteView3");
        }
    });
});