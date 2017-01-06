import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'
import request from 'superagent'
var translate = require('../translate').message

module.exports = (pictures) => {
  var el = yo`<div class="container timeline">
  <div id="modalCamara" class="modal center-align">
    <div class="modal-content">
      <div class="camara-picture" id="camara-input">
      </div>
    </div>
    <div class="modal-footer">
      <button class="waves-effect waves-light btn" id="shoot">
        <i class="fa fa-camera"></i>
      </button>
    </div>
  </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form id="formUpload" enctype="multipart/form-data" class="form-upload" onsubmit=${onsubmit}>
          <a href="#modalCamara" class="waves-efect waves-light btn modal-trigger" data-target="modalCamara">
            <i class="fa fa-camera"></i>
          </a>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-cloud-upload" aria-hidden="true"></i>${translate('upload-picture')}</span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onChange}/>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function (pic) {
          return picture(pic)
        })}
      </div
    </div>
  </div>
    `

    function toggleButtons() {
      document.getElementById('fileName').classList.toggle('hide')
      document.getElementById('btnUpload').classList.toggle('hide')
      document.getElementById('btnCancel').classList.toggle('hide')
    }

    function onChange() {
      toggleButtons()
    }

    function cancel() {
      toggleButtons()
      document.getElementById('formUpload').reset()
    }

    function onsubmit(ev) {
      ev.preventDefault()
      var data = new FormData(this)
      request
        .post('/api/pictures')
        .send(data)
        .set('Accept', 'application/json')
        .end(function(err, res) {
          console.log(arguments)
        })
    }

    return layout(el)
  }
