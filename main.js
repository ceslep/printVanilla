import './style.css'

import './src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.getElementById("btnImprimir").addEventListener("click", () => {
  let documentDefinition = {
    compress:false,
    pageSize: {
      width: 130,
      height: 'auto'
    },
    pageMargins: [ 5, 5, 5, 5 ],
    content: [
      {
        table: {
          width: "100%",
          body: [['1', '2', '3', '4', '5','6','7'], ['1', '2', '3', '4', '5','6','7'], ['1', '2', '3', '4', '5','6','7'], ['1', '2', '3', '4', '5','6','7'], ['1', '2', '3', '4', '5','6','7'], ['1', '2', '3', '4', '5','6','7']]
        }
      }
    ]
  }
  pdfMake.createPdf(documentDefinition).open();
})


