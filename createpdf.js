$("body").on("click", "#btnExport", function () {
    html2canvas($('#tblservicehistory')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Service-History.pdf");
        }
    });
});
