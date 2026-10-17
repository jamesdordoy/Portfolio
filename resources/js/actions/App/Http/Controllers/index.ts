import HomeController from './HomeController';
import ContactController from './ContactController';
import NewsletterController from './NewsletterController';

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    ContactController: Object.assign(ContactController, ContactController),
    NewsletterController: Object.assign(NewsletterController, NewsletterController),
};

export default Controllers;
