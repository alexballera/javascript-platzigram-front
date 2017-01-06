import yo from 'yo-yo'
import layout from '../layout'
import translate from '../translate'

export default (user) => {
  var el = yo`
  <div class="container user-page">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align heading">
        <div class="row">
          <div class="col s12 m10 offset-m1 l3 offset-l3 center">
            <img src="${user.avatar}" class="responsive-img circle">
          </div>
          <div class="col s12 m10 offset-m1 l6 left-align">
            <h2 class="hide-on-large-only center-align">${user.username}</h2>
            <h2 class="hide-on-med-and-down left-align">${user.username}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        ${user.pictures.map(function(picture) {
          return yo`
          <div class="col s12 m6 l4">
            <a href="/${user.username}/${picture.id}" data-target="modal${picture.id}" class="modal-trigger picture-container">
              <img src="${picture.src}" class="picture">
              <div class="likes"><i class="fa fa-heart"></i>${picture.likes}</div>
            </a>
            <div id="modal${picture.id}" class="modal modal-fixed-footer">
              <div class="modal-content center">
                <img src="${picture.src}">
              </div>
              <div class="modal-footer">
                <div class="btn btn-flat likes">
                  <p>Aqui estoy</p>
                  <i class="fa fa-heart"></i> ${translate.message('likes', { likes: picture.likes} )}
                </div>
              </div>
            </div>
          </div>`
        })}
      </div>
    </div>
  </div>
    `
    return layout(el)

}
// Usar con materialbox
// <div class="col s12 m6 l4">
//   <div class="picture-container ">
//     <img src="${picture.src}" class="picture materialboxed" data-caption="${translate.message('likes', { likes: picture.likes} )}">
//     <div class="likes"><i class="fa fa-heart"></i>${picture.likes}</div>
//   </div>
//   <div id="modal${picture.id}" class="modal modal-fixed-footer">
//     <div class="modal-content">
//       <img src="${picture.src}">
//     </div>
//     <div class="modal-footer">
//       <div class="btn btn-flat likes">
//         <i class="fa fa-heart"></i> ${translate.message('likes', { likes: picture.likes} )}
//       </div>
//     </div>
//   </div>
// </div>