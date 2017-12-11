import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import STYLES from './App.scss';

const api = require('./api');
const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Welcome to hangar-ui!</BpkText>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </header>
    <main className={c('App__main')}>
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={12}>
            <BpkText tagName="p" className={c('App__text')}>
              /healthcheck = {api.getHealthCheck()}
            </BpkText>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    </main>
  </div>
);

export default App;
