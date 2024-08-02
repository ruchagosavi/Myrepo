import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import styles from './Components.module.css';

// Importing Page Sections
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import CTASection from '../../components/CTASection/CTASection';
import PricingPage from '../../components/PricingPage/PricingPage';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import FAQSection from '../../components/FAQSection/FAQSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';

// Importing Pages
import LandingPage from '../../components/LandingPage/LandingPage';
import AboutPage from '../../components/AboutPage/AboutPage';
import ContactPage from '../../components/ContactPage/ContactPage';
import LoginPage from '../../components/LoginPage/LoginPage';
import RegistrationPage from '../../components/RegistrationPage/RegistrationPage';
import DashboardPage from '../../components/DashboardPage/DashboardPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';

// Importing Layouts
import GridLayout from '../../components/GridLayout/GridLayout';
import FlexLayout from '../../components/FlexLayout/FlexLayout';

// Importing Forms
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import SearchForm from '../../components/SearchForm/SearchForm';

// Importing UI Elements
import Button from '../../components/Button/Button';
import CardSection from '../../components/CardSection/CardSection';
import Modal from '../../components/Modal/Modal';
import Tab from '../../components/Tab/Tab';
import Accordion from '../../components/Accordion/Accordion';
import Tooltip from '../../components/Tooltip/Tooltip';
import Alert from '../../components/Alert/Alert';
import Badge from '../../components/Badge/Badge';
import Breadcrumb from '../../components/BreadCrumb/Breadcrumb';
import Pagination from '../../components/Pagination/Pagination';
import Dropdown from '../../components/Dropdown/Dropdown';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';
import List from '../../components/List/List';
import Image from '../../components/Image/Image';
import Icon from '../../components/Icon/Icon';

// Importing Navigation
import NavbarSection from '../../components/NavbarSection/NavbarSection';
import Sidebar from '../../components/Sidebar/Sidebar';
import Menu from '../../components/Menu/Menu';

// Importing Media
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import Carousel from '../../components/Carousel/Carousel';

// Importing Data Display
import Chart from '../../components/Chart/Chart';
import Graph from '../../components/Graph/Graph';
import Map from '../../components/Map/Map';
import Statistic from '../../components/Statistic/Statistic';

// Importing Utility Components
import Divider from '../../components/Divider/Divider';
import Avatar from '../../components/Avatar/Avatar';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';

const Components: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const components = [
    { name: 'Hero Section', category: 'Hero Section', count: 12, component: HeroSection },
    { name: 'Feature Section', category: 'Feature Section', count: 18, component: FeatureSection },
    { name: 'CTA Section', category: 'CTA Section', count: 11, component: CTASection },
    { name: 'Pricing Page', category: 'Pricing Page', count: 13, component: PricingPage },
    { name: 'Header Section', category: 'Header Section', count: 10, component: HeaderSection },
    { name: 'Footer Section', category: 'Footer Section', count: 7, component: FooterSection },
    { name: 'Testimonials Section', category: 'Testimonials Section', count: 7, component: TestimonialsSection },
    { name: 'FAQ Section', category: 'FAQ Section', count: 5, component: FAQSection },
    { name: 'Team Section', category: 'Team Section', count: 5, component: TeamSection },
    { name: 'Newsletter Section', category: 'Newsletter Section', count: 7, component: NewsletterSection },
  ];

  const pages = [
    { name: 'Landing Page', category: 'Landing Page', count: 5, component: LandingPage },
    { name: 'About Page', category: 'About Page', count: 8, component: AboutPage },
    { name: 'Contact Page', category: 'Contact Page', count: 4, component: ContactPage },
    { name: 'Login Page', category: 'Login Page', count: 4, component: LoginPage },
    { name: 'Registration Page', category: 'Registration Page', count: 4, component: RegistrationPage },
    { name: 'Dashboard Page', category: 'Dashboard Page', count: 4, component: DashboardPage },
    { name: 'Profile Page', category: 'Profile Page', count: 4, component: ProfilePage },
  ];

  const layouts = [
    { name: 'Grid Layout', category: 'Grid Layout', count: 10, component: GridLayout },
    { name: 'Flex Layout', category: 'Flex Layout', count: 7, component: FlexLayout },
  ];

  const forms = [
    { name: 'Login Form', category: 'Login Form', count: 6, component: LoginForm },
    { name: 'Registration Form', category: 'Registration Form', count: 9, component: RegistrationForm },
    { name: 'Contact Form', category: 'Contact Form', count: 4, component: ContactForm },
    { name: 'Subscription Form', category: 'Subscription Form', count: 4, component: SubscriptionForm },
    { name: 'Feedback Form', category: 'Feedback Form', count: 4, component: FeedbackForm },
    { name: 'Search Form', category: 'Search Form', count: 4, component: SearchForm },
  ];

  const uiElements = [
    { name: 'Button', category: 'Button', count: 8, component: Button },
    { name: 'Card Section', category: 'Card Section', count: 12, component: CardSection },
    { name: 'Progress Bar', category: 'Progress Bar', count: 12, component: ProgressBar },
    { name: 'Dropdown', category: 'Dropdown', count: 7, component: Dropdown },
    { name: 'Modal', category: 'Modal', count: 5, component: Modal },
    { name: 'Tab', category: 'Tab', count: 4, component: Tab },
    { name: 'Accordion', category: 'Accordion', count: 6, component: Accordion },
    { name: 'Tooltip', category: 'Tooltip', count: 5, component: Tooltip },
    { name: 'Alert', category: 'Alert', count: 4, component: Alert },
    { name: 'Badge', category: 'Badge', count: 3, component: Badge },
  ];

  const navigation = [
    { name: 'Navbar Section', category: 'Navbar Section', count: 5, component: NavbarSection },
    { name: 'Sidebar', category: 'Sidebar', count: 5, component: Sidebar },
    { name: 'Menu', category: 'Menu', count: 5, component: Menu },
  ];

  const media = [
    { name: 'Image Gallery', category: 'Image Gallery', count: 4, component: ImageGallery },
    { name: 'Video Player', category: 'Video Player', count: 3, component: VideoPlayer },
    { name: 'Audio Player', category: 'Audio Player', count: 3, component: AudioPlayer },
    { name: 'Carousel', category: 'Carousel', count: 3, component: Carousel },
  ];

  const dataDisplay = [
    { name: 'Chart', category: 'Chart', count: 4, component: Chart },
    { name: 'Graph', category: 'Graph', count: 4, component: Graph },
    { name: 'Map', category: 'Map', count: 4, component: Map },
  ];

  const utility = [
    { name: 'Divider', category: 'Divider', count: 3, component: Divider },
    { name: 'Avatar', category: 'Avatar', count: 3, component: Avatar },
    { name: 'Tag', category: 'Tag', count: 3, component: Tag },
    { name: 'Rating', category: 'Rating', count: 3, component: Rating },
  ];

  const filteredComponents = (section: { name: string, category: string, count: number, component: React.FC }[]) =>
    section.filter(component =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className={styles.componentsContainer}>
      <div className={styles.heroSection}>
        <h1>Huge collection of sections</h1>
        <h2>Infinite combinations</h2>
        <h4>
          All our sections are compatible with all of the components on our website. Mix and match sections from multiple
          themes and you&apos;ll have a shop that looks like no other.
        </h4>
        <Link to="/components" className={styles.viewAllComponentsButton}>
          <button className={styles.viewComponentsButton}>View all components</button>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a component..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.componentsList}>
        <Tabs.Root defaultValue="pageSections">
          <Tabs.List className={styles.tabsList} aria-label="Component categories">
            <Tabs.Trigger className={styles.tabsTrigger} value="pageSections">
              Page Sections
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.tabsTrigger} value="pages">
              Pages
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.tabsTrigger} value="forms">
              Forms
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.tabsTrigger} value="uiElements">
              UI Elements
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.tabsTrigger} value="dataDisplay">
              Data Display
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className={styles.tabsContent} value="pageSections">
            <ul className={styles.components}>
              {filteredComponents(components).map((component) => (
                <li key={component.name} className={styles.componentItem}>
                  <Link to={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {component.name} <span>({component.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Tabs.Content>
          <Tabs.Content className={styles.tabsContent} value="pages">
            <ul className={styles.components}>
              {filteredComponents(pages).map((component) => (
                <li key={component.name} className={styles.componentItem}>
                  <Link to={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {component.name} <span>({component.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Tabs.Content>
          <Tabs.Content className={styles.tabsContent} value="forms">
            <ul className={styles.components}>
              {filteredComponents(forms).map((component) => (
                <li key={component.name} className={styles.componentItem}>
                  <Link to={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {component.name} <span>({component.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Tabs.Content>
          <Tabs.Content className={styles.tabsContent} value="uiElements">
            <ul className={styles.components}>
              {filteredComponents(uiElements).map((component) => (
                <li key={component.name} className={styles.componentItem}>
                  <Link to={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {component.name} <span>({component.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Tabs.Content>
          <Tabs.Content className={styles.tabsContent} value="dataDisplay">
            <ul className={styles.components}>
              {filteredComponents(dataDisplay).map((component) => (
                <li key={component.name} className={styles.componentItem}>
                  <Link to={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {component.name} <span>({component.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Components;
