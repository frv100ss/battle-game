import expect from 'expect';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';
import store from './../data/store.js';

const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js' };


global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;

global.store = store;
