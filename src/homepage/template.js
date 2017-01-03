import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'
var translate = require('../translate').message

module.exports = (pictures) => {
  var el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form enctype="multipart/form-data" class="form-upload">
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <span><i class="fa fa-camera" aria-hidden="true"></i>${translate('upload-picture')}</span>
            <input name="picture" id="file" type="file" class="upload"/>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat red hide"><i class="fa fa-times" aria-hidden="true"></i></button>
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
  return layout(el)
  }
