WebViewer({
  path: 'http://localhost:8080/WebViewer/lib', // path to the PDFTron 'lib' folder on your server
  licenseKey: '',
  initialDoc: 'http://localhost:8080/form.pdf',
  // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
}, document.getElementById('viewer'))
.then(instance => {
  const docViewer = instance.docViewer;
  const annotManager = instance.annotManager;

  // Create 150 countries 
  const countries = [];

  for(var i = 0; i < 150; i++) {
    countries.push(`Country ${i + 1}`)
  }
  docViewer.on('annotationsLoaded', () => {
    const countryField = annotManager.getFieldManager().getField("Country Combo Box");
    
    countryField.set({
      options: countries.map((country) => ({
        value: country,
      })),
    });
  });
});