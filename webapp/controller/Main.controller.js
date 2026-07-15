sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.b70sapui5.controller.Main", {
        onInit() {
        },
        onButtonPress() {
            // route to View2 when the button is pressed
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});