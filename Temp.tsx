import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.css';

// Importing Components
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
import LandingPage from '../../components/LandingPage/LandingPage';
import AboutPage from '../../components/AboutPage/AboutPage';
import ContactPage from '../../components/ContactPage/ContactPage';
import LoginPage from '../../components/LoginPage/LoginPage';
import RegistrationPage from '../../components/RegistrationPage/RegistrationPage';
import DashboardPage from '../../components/DashboardPage/DashboardPage';
import ProfilePage from '../../components/ProfilePage/ProfilePage';
import GridLayout from '../../components/GridLayout/GridLayout';
import FlexLayout from '../../components/FlexLayout/FlexLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import SubscriptionForm from '../../components/SubscriptionForm/SubscriptionForm';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import SearchForm from '../../components/SearchForm/SearchForm';
import Button from '../../components/Button/Button';
import CardSection from '../../components/CardSection/CardSection';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Dropdown from '../../components/Dropdown/Dropdown';
import NavbarSection from '../../components/NavbarSection/NavbarSection';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Chart from '../../components/Chart/Chart';
import Divider from '../../components/Divider/Divider';

const Components: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const allComponents = [
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
    { name: 'Landing Page', category: 'Landing Page', count: 5, component: LandingPage },
    { name: 'About Page', category: 'About Page', count: 8, component: AboutPage },
    { name: 'Contact Page', category: 'Contact Page', count: 4, component: ContactPage },
    { name: 'Login Page', category: 'Login Page', count: 4, component: LoginPage },
    { name: 'Registration Page', category: 'Registration Page', count: 4, component: RegistrationPage },
    { name: 'Dashboard Page', category: 'Dashboard Page', count: 4, component: DashboardPage },
    { name: 'Profile Page', category: 'Profile Page', count: 4, component: ProfilePage },
    { name: 'Grid Layout', category: 'Grid Layout', count: 10, component: GridLayout },
    { name: 'Flex Layout', category: 'Flex Layout', count: 7, component: FlexLayout },
    { name: 'Login Form', category: 'Login Form', count: 6, component: LoginForm },
    { name: 'Registration Form', category: 'Registration Form', count: 9, component: RegistrationForm },
    { name: 'Contact Form', category: 'Contact Form', count: 4, component: ContactForm },
    { name: 'Subscription Form', category: 'Subscription Form', count: 4, component: SubscriptionForm },
    { name: 'Feedback Form', category: 'Feedback Form', count: 4, component: FeedbackForm },
    { name: 'Search Form', category: 'Search Form', count: 4, component: SearchForm },
    { name: 'Button', category: 'Button', count: 8, component: Button },
    { name: 'Card Section', category: 'Card Section', count: 12, component: CardSection },
    { name: 'Progress Bar', category: 'Progress Bar', count: 12, component: ProgressBar },
    { name: 'Dropdown', category: 'Dropdown', count: 7, component: Dropdown },
    { name: 'Navbar Section', category: 'Navbar Section', count: 5, component: NavbarSection },
    { name: 'Image Gallery', category: 'Image Gallery', count: 4, component: ImageGallery },
    { name: 'Chart', category: 'Chart', count: 4, component: Chart },
    { name: 'Divider', category: 'Divider', count: 3, component: Divider },
  ];

  const componentsPerPage = 10;

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const filteredComponents = allComponents
    .filter(component =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, page * componentsPerPage);

  return (
    <div className="componentsContainer">
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your components">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Page Sections
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Pages
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab3">
            Layouts
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab4">
            Forms
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab5">
            UI Elements
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab6">
            Navigation
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab7">
            Media
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab8">
            Data Display
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab9">
            Utility Components
          </Tabs.Trigger>
        </Tabs.List>

        <div id="scrollableDiv" className="scrollableContent">
          <InfiniteScroll
            dataLength={filteredComponents.length}
            next={fetchMoreData}
            hasMore={filteredComponents.length < allComponents.length}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            <Tabs.Content className="TabsContent" value="tab1">
              <div className="section">
                <div className="blocksContainer">
                  {filteredComponents.map((component, index) => (
                    <Link key={index} to={`/${component.name.toLowerCase().replace(/ /g, '')}`} className="blockLink">
                      <div className="block">
                        <div className="blockImage">Image</div>
                        <div className="blockContent">
                          <p className="blockTitle">{component.category}</p>
                          <p className="blockCount">{component.count} components</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Tabs.Content>
          </InfiniteScroll>
        </div>
      </Tabs.Root>
    </div>
  );
};

export default Components;

/* General styles for the components page */
.componentsContainer {
  display: flex;
  flex-direction: column;
}

.TabsRoot {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.TabsList {
  display: flex;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.TabsTrigger {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background: none;
  color: #007bff;
}

.TabsTrigger[data-state="active"] {
  border-bottom: 2px solid #007bff;
}

.scrollableContent {
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 3rem;
}

.section {
  padding: 1rem;
}

.blocksContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.blockLink {
  text-decoration: none;
  color: inherit;
}

.block {
  border: 1px solid #e1e1e1;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  width: calc(33.333% - 2rem);
}

.blockImage {
  height: 100px;
  background-color: #f1f1f1;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.blockContent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.blockTitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.blockCount {
  font-size: 1rem;
  color: #777;
}

/* Style for Infinite Scroll loader */
.infiniteScrollLoader {
  text-align: center;
  padding: 1rem;
}


