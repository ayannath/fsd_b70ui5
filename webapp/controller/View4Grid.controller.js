sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.clientname.b70sapui5.controller.View4Grid", {
        onInit() {
        },

        onNavBack() {
            history.go(-1);
        }
        
    });
});