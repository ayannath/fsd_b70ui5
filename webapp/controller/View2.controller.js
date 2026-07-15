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
        }
    });
});