import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styles from './TabsDemo.module.css';

const TabsDemo: React.FC = () => (
  <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
    <div className={styles.TabsContainer}>
      <Tabs.List className={styles.TabsList} aria-label="Manage your components">
        <Tabs.Trigger className={styles.TabsTrigger} value="tab1">
          Component 1
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab2">
          Component 2
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab3">
          Component 3
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab4">
          Component 4
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab5">
          Component 5
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab6">
          Component 6
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.TabsTrigger} value="tab7">
          Component 7
        </Tabs.Trigger>
      </Tabs.List>
      <div className={styles.TabsContentWrapper}>
        <Tabs.Content className={styles.TabsContent} value="tab1">
          {/* Component 1 content */}
          <p className={styles.Text}>Content for Component 1.</p>
          {/* Your component 1 specific content goes here */}
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value="tab2">
          {/* Component 2 content */}
          <p className={styles.Text}>Content for Component 2.</p>
          {/* Your component 2 specific content goes here */}
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value="tab3">
          {/* Component 3 content */}
          <p className={styles.Text}>Content for Component 3.</p>
          {/* Your component 3 specific content goes here */}
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value="tab4">
          {/* Component 4 content */}
          <p className={styles.Text}>Content for Component 4.</p>
          {/* Your component 4 specific content goes here */}
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value="tab5">
          {/* Component 5 content */}
          <p className={styles.Text}>Content for Component 5.</p>
          {/* Your component 5 specific content goes here */}
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value="tab6">
          {/* Component 6 content */}
          <p className={styles.Text}>Content for Component 6.</p>
          {/* Your component 6 specific content goes here */}
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value="tab7">
          {/* Component 7 content */}
          <p className={styles.Text}>Content for Component 7.</p>
          {/* Your component 7 specific content goes here */}
        </Tabs.Content>
      </div>
    </div>
  </Tabs.Root>
);

export default TabsDemo;






.TabsRoot {
  display: flex;
  height: 100%;
}

.TabsContainer {
  display: flex;
  height: 100%;
}

.TabsList {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border-right: 1px solid #ccc;
  width: 200px; /* Adjust the width as needed */
}

.TabsTrigger {
  padding: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-weight: bold;
}

.TabsTrigger[aria-selected='true'] {
  background: #e0e0e0;
  border-right: 1px solid transparent;
}

.TabsContentWrapper {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto; /* Add this if content is scrollable */
}

.TabsContent {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Text {
  margin-bottom: 10px;
}

.Fieldset {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: none;
  padding: 0;
}

.Label {
  font-weight: bold;
}

.Input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.ButtonWrapper {
  display: flex;
  justify-content: flex-end;
}

.Button {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.Button:hover {
  opacity: 0.8;
}
