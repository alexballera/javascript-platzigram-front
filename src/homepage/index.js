import page from 'page'
import empty from 'empty-element'
import template from './template'
import title from 'title'

var main = document.getElementById('main-container')

export default () => {
  page('/', (ctx, next) => {
    title('Platzigram')
    var pictures = [
      {
        user: {
          username: 'alexballera',
          avatar: 'https://en.gravatar.com/userimage/47902132/6c0627fea40f1121473a83983b792a26.jpg?size=200'
        },
        url: 'images/office.jpg',
        likes: 10,
        liked: false,
        createdAt: new Date()
      },
      {
        user: {
          username: 'alexballera',
          avatar: 'https://en.gravatar.com/userimage/47902132/6c0627fea40f1121473a83983b792a26.jpg?size=200'
        },
        url: 'images/office.jpg',
        likes: 24,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
      }
    ]
    empty(main).appendChild(template(pictures))
  })
}
