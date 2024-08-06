import React, { useState, useRef, useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Components.module.css';

// Importing Components (add your own component imports here)
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import CTASection from '../../components/CTASection/CTASection';
import PricingPage from '../../components/PricingPage/PricingPage';

const Components: React.FC = () => {
  const tabsRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: 'page-sections',
      title: 'Page Sections',
      components: [
        { name: 'Hero Section', component: HeroSection },
        { name: 'Feature Section', component: FeatureSection },
        { name: 'CTA Section', component: CTASection },
        { name: 'Pricing Page', component: PricingPage },
      ],
    },
    {
      id: 'pages',
      title: 'Pages',
      components: [
        // Add more components here
      ],
    },
    {
      id: 'layouts',
      title: 'Layouts',
      components: [
        // Add more components here
      ],
    },
  ];

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('scrollContainer');
      if (scrollContainer) {
        setScrollHeight(scrollContainer.scrollHeight);
        if (scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight) {
          if (currentTabIndex < sections.length - 1) {
            setCurrentTabIndex(currentTabIndex + 1);
          }
        }
      }
    };

    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentTabIndex, sections.length]);

  return (
    <div className={styles.componentsContainer}>
      <div className={styles.sidebar}>
        <Tabs.Root ref={tabsRef} defaultValue={sections[0].id} value={sections[currentTabIndex].id}>
          <Tabs.List className={styles.TabsList} aria-label="Component Sections">
            {sections.map((section, index) => (
              <Tabs.Trigger
                key={section.id}
                className={styles.TabsTrigger}
                value={section.id}
                onClick={() => setCurrentTabIndex(index)}
              >
                {section.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {sections.map(section => (
            <Tabs.Content key={section.id} className={styles.TabsContent} value={section.id}>
              <InfiniteScroll
                dataLength={scrollHeight} // This is important to avoid infinte loop
                next={() => {}}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollContainer"
              >
                {section.components.map((componentData, index) => {
                  const Component = componentData.component;
                  return (
                    <div key={index} className={styles.section}>
                      <Component />
                    </div>
                  );
                })}
              </InfiniteScroll>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
      <div id="scrollContainer" className={styles.contentContainer}>
        <Tabs.Content className={styles.TabsContent} value={sections[currentTabIndex].id}>
          {sections[currentTabIndex].components.map((componentData, index) => {
            const Component = componentData.component;
            return (
              <div key={index} className={styles.section}>
                <Component />
              </div>
            );
          })}
        </Tabs.Content>
      </div>
    </div>
  );
};

export default Components;



/* General Styles */
.componentsContainer {
  display: flex;
  flex-direction: row;
}

.sidebar {
  width: 250px;
  position: fixed;
  height: 100%;
  overflow: auto;
  background: #f0f0f0;
  padding: 20px;
}

.contentContainer {
  margin-left: 270px;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
}

.section {
  margin-bottom: 50px;
}

.sectionHeading {
  font-size: 24px;
  margin-bottom: 20px;
}

.blocksContainer {
  display: flex;
  flex-wrap: wrap;
}

.blockLink {
  text-decoration: none;
  color: inherit;
}

.block {
  width: 200px;
  margin: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.blockImage {
  height: 100px;
  background: #eee;
  margin-bottom: 10px;
}

.blockContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blockTitle {
  font-size: 18px;
  margin-bottom: 5px;
}

.blockCount {
  font-size: 14px;
  color: #888;
}

/* Tabs Styles */
.TabsRoot {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.TabsList {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.TabsTrigger {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
}

.TabsTrigger[data-state='active'] {
  border-bottom: 2px solid #000;
}

.TabsContent {
  padding: 20px;
  background: #fff;
}

/* Infinite Scroll Styles */
.infinite-scroll-component__outerdiv {
  width: 100%;
}
