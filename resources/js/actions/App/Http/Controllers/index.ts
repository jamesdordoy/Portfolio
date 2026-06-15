import HomeController from './HomeController'
import NewsletterController from './NewsletterController'
import ContactController from './ContactController'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    NewsletterController: Object.assign(NewsletterController, NewsletterController),
    ContactController: Object.assign(ContactController, ContactController),
}

export default Controllers