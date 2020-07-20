/** @format */

import React from "react";
import App from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

import Doodle from "../src/components/atoms/doodle";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 376px) and (max-width: 412px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 413px) and (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 451px){
  html {
    font-size: 13px;
  }
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
          .ant-steps {
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5715;
            list-style: none;
            -webkit-font-feature-settings: 'tnum';
                    font-feature-settings: 'tnum';
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            font-size: 0;
            text-align: initial;
          }
          .ant-steps-item {
            position: relative;
            display: inline-block;
            -webkit-box-flex: 1;
                -ms-flex: 1;
                    flex: 1;
            overflow: hidden;
            vertical-align: top;
          }
          .ant-steps-item-container {
            outline: none;
          }
          .ant-steps-item:last-child {
            -webkit-box-flex: 0;
                -ms-flex: none;
                    flex: none;
          }
          .ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-tail,
          .ant-steps-item:last-child > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            display: none;
          }
          .ant-steps-item-icon,
          .ant-steps-item-content {
            display: inline-block;
            vertical-align: top;
          }
          .ant-steps-item-icon {
            width: 32px;
            height: 32px;
            margin: 0 8px 0 0;
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
            line-height: 32px;
            text-align: center;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 32px;
            -webkit-transition: background-color 0.3s, border-color 0.3s;
            transition: background-color 0.3s, border-color 0.3s;
          }
          .ant-steps-item-icon > .ant-steps-icon {
            position: relative;
            top: -1px;
            color: rgb(255, 144, 69);
            line-height: 1;
          }
          .ant-steps-item-tail {
            position: absolute;
            top: 12px;
            left: 0;
            width: 100%;
            padding: 0 10px;
          }
          .ant-steps-item-tail::after {
            display: inline-block;
            width: 100%;
            height: 1px;
            background: #f0f0f0;
            border-radius: 1px;
            -webkit-transition: background 0.3s;
            transition: background 0.3s;
            content: '';
          }
          .ant-steps-item-title {
            position: relative;
            display: inline-block;
            padding-right: 16px;
            color: rgba(0, 0, 0, 0.65);
            font-size: 16px;
            line-height: 32px;
          }
          .ant-steps-item-title::after {
            position: absolute;
            top: 16px;
            left: 100%;
            display: block;
            width: 9999px;
            height: 1px;
            background: #f0f0f0;
            content: '';
          }
          .ant-steps-item-subtitle {
            display: inline;
            margin-left: 8px;
            color: rgba(0, 0, 0, 0.45);
            font-weight: normal;
            font-size: 14px;
          }
          .ant-steps-item-description {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
          }
          .ant-steps-item-wait .ant-steps-item-icon {
            background-color: #fff;
            border-color: rgba(0, 0, 0, 0.25);
          }
          .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
            color: rgba(0, 0, 0, 0.25);
          }
          .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
            background: rgba(0, 0, 0, 0.25);
          }
          .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
            color: rgba(0, 0, 0, 0.45);
          }
          .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            background-color: #f0f0f0;
          }
          .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
            color: rgba(0, 0, 0, 0.45);
          }
          .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-tail::after {
            background-color: #f0f0f0;
          }
          .ant-steps-item-process .ant-steps-item-icon {
            background-color: #fff;
            border-color: rgb(255, 144, 69);
          }
          .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
            color: rgb(255, 144, 69);
          }
          .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
            background: rgb(255, 144, 69);
          }
          .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
            color: rgba(0, 0, 0, 0.85);
          }
          .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            background-color: #f0f0f0;
          }
          .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
            color: rgba(0, 0, 0, 0.65);
          }
          .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-tail::after {
            background-color: #f0f0f0;
          }
          .ant-steps-item-process .ant-steps-item-icon {
            background: rgb(255, 144, 69);
          }
          .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
            color: #fff;
          }
          .ant-steps-item-process .ant-steps-item-title {
            font-weight: 500;
          }
          .ant-steps-item-finish .ant-steps-item-icon {
            background-color: #fff;
            border-color: rgb(255, 144, 69);
          }
          .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
            color: rgb(255, 144, 69);
          }
          .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
            background: rgb(255, 144, 69);
          }
          .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
            color: rgba(0, 0, 0, 0.65);
          }
          .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            background-color: rgb(255, 144, 69);
          }
          .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
            color: rgba(0, 0, 0, 0.45);
          }
          .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-tail::after {
            background-color: rgb(255, 144, 69);
          }
          .ant-steps-item-error .ant-steps-item-icon {
            background-color: #fff;
            border-color: #ff4d4f;
          }
          .ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {
            color: #ff4d4f;
          }
          .ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
            background: #ff4d4f;
          }
          .ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
            color: #ff4d4f;
          }
          .ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            background-color: #f0f0f0;
          }
          .ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
            color: #ff4d4f;
          }
          .ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-tail::after {
            background-color: #f0f0f0;
          }
          .ant-steps-item.ant-steps-next-error .ant-steps-item-title::after {
            background: #ff4d4f;
          }
          .ant-steps-item-disabled {
            cursor: not-allowed;
          }
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] {
            cursor: pointer;
          }
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-title,
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-subtitle,
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-description,
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button'] .ant-steps-item-icon .ant-steps-icon {
            -webkit-transition: color 0.3s;
            transition: color 0.3s;
          }
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-title,
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-subtitle,
          .ant-steps .ant-steps-item:not(.ant-steps-item-active) > .ant-steps-item-container[role='button']:hover .ant-steps-item-description {
            color: rgb(255, 144, 69);
          }
          .ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon {
            border-color: rgb(255, 144, 69);
          }
          .ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process) > .ant-steps-item-container[role='button']:hover .ant-steps-item-icon .ant-steps-icon {
            color: rgb(255, 144, 69);
          }
          .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
            margin-right: 16px;
            white-space: nowrap;
          }
          .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
            margin-right: 0;
          }
          .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
            padding-right: 0;
          }
          .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {
            display: none;
          }
          .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {
            max-width: 140px;
            white-space: normal;
          }
          .ant-steps-item-custom .ant-steps-item-icon {
            height: auto;
            background: none;
            border: 0;
          }
          .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
            top: 0px;
            left: 0.5px;
            width: 32px;
            height: 32px;
            font-size: 24px;
            line-height: 32px;
          }
          .ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
            color: rgb(255, 144, 69);
          }
          .ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
            width: auto;
            background: none;
          }
          .ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
            margin-right: 12px;
          }
          .ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
            margin-right: 0;
          }
          .ant-steps-small .ant-steps-item-icon {
            width: 24px;
            height: 24px;
            margin: 0 8px 0 0;
            font-size: 12px;
            line-height: 24px;
            text-align: center;
            border-radius: 24px;
          }
          .ant-steps-small .ant-steps-item-title {
            padding-right: 12px;
            font-size: 14px;
            line-height: 24px;
          }
          .ant-steps-small .ant-steps-item-title::after {
            top: 12px;
          }
          .ant-steps-small .ant-steps-item-description {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
          }
          .ant-steps-small .ant-steps-item-tail {
            top: 8px;
          }
          .ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {
            width: inherit;
            height: inherit;
            line-height: inherit;
            background: none;
            border: 0;
            border-radius: 0;
          }
          .ant-steps-small .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
            font-size: 24px;
            line-height: 24px;
            -webkit-transform: none;
                    transform: none;
          }
          .ant-steps-vertical {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
          }
          .ant-steps-vertical .ant-steps-item {
            display: block;
            -webkit-box-flex: 1;
                -ms-flex: 1 0 auto;
                    flex: 1 0 auto;
            overflow: visible;
          }
          .ant-steps-vertical .ant-steps-item-icon {
            float: left;
            margin-right: 16px;
          }
          .ant-steps-vertical .ant-steps-item-content {
            display: block;
            min-height: 48px;
            overflow: hidden;
          }
          .ant-steps-vertical .ant-steps-item-title {
            line-height: 32px;
          }
          .ant-steps-vertical .ant-steps-item-description {
            padding-bottom: 12px;
          }
          .ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
            position: absolute;
            top: 0;
            left: 16px;
            width: 1px;
            height: 100%;
            padding: 38px 0 6px;
          }
          .ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
            width: 1px;
            height: 100%;
          }
          .ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {
            display: block;
          }
          .ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            display: none;
          }
          .ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
            position: absolute;
            top: 0;
            left: 12px;
            padding: 30px 0 6px;
          }
          .ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
            line-height: 24px;
          }
          .ant-steps-rtl.ant-steps-vertical .ant-steps-item-icon {
            float: right;
            margin-right: 0;
            margin-left: 16px;
          }
          .ant-steps-rtl.ant-steps-vertical > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
            right: 16px;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
            right: 12px;
            left: auto;
          }
          @media (max-width: 480px) {
            .ant-steps-horizontal.ant-steps-label-horizontal {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
                  -ms-flex-direction: column;
                      flex-direction: column;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {
              display: block;
              -webkit-box-flex: 1;
                  -ms-flex: 1 0 auto;
                      flex: 1 0 auto;
              overflow: visible;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {
              float: left;
              margin-right: 16px;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-content {
              display: block;
              min-height: 48px;
              overflow: hidden;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-title {
              line-height: 32px;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-description {
              padding-bottom: 12px;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
              position: absolute;
              top: 0;
              left: 16px;
              width: 1px;
              height: 100%;
              padding: 38px 0 6px;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
              width: 1px;
              height: 100%;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail {
              display: block;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
              display: none;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
              position: absolute;
              top: 0;
              left: 12px;
              padding: 30px 0 6px;
            }
            .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-title {
              line-height: 24px;
            }
            .ant-steps-rtl.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {
              float: right;
              margin-right: 0;
              margin-left: 16px;
            }
            .ant-steps-rtl.ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
              right: 16px;
              left: auto;
            }
            .ant-steps-rtl.ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-container .ant-steps-item-tail {
              right: 12px;
              left: auto;
            }
          }
          .ant-steps-label-vertical .ant-steps-item {
            overflow: visible;
          }
          .ant-steps-label-vertical .ant-steps-item-tail {
            margin-left: 58px;
            padding: 3.5px 24px;
          }
          .ant-steps-label-vertical .ant-steps-item-content {
            display: block;
            width: 116px;
            margin-top: 8px;
            text-align: center;
          }
          .ant-steps-label-vertical .ant-steps-item-icon {
            display: inline-block;
            margin-left: 42px;
          }
          .ant-steps-label-vertical .ant-steps-item-title {
            padding-right: 0;
            padding-left: 0;
          }
          .ant-steps-label-vertical .ant-steps-item-title::after {
            display: none;
          }
          .ant-steps-label-vertical .ant-steps-item-subtitle {
            display: block;
            margin-bottom: 4px;
            margin-left: 0;
            line-height: 1.5715;
          }
          .ant-steps-label-vertical.ant-steps-small:not(.ant-steps-dot) .ant-steps-item-icon {
            margin-left: 46px;
          }
          .ant-steps-dot .ant-steps-item-title,
          .ant-steps-dot.ant-steps-small .ant-steps-item-title {
            line-height: 1.5715;
          }
          .ant-steps-dot .ant-steps-item-tail,
          .ant-steps-dot.ant-steps-small .ant-steps-item-tail {
            top: 2px;
            width: 100%;
            margin: 0 0 0 70px;
            padding: 0;
          }
          .ant-steps-dot .ant-steps-item-tail::after,
          .ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
            width: calc(100% - 20px);
            height: 3px;
            margin-left: 12px;
          }
          .ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,
          .ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
            left: 2px;
          }
          .ant-steps-dot .ant-steps-item-icon,
          .ant-steps-dot.ant-steps-small .ant-steps-item-icon {
            width: 8px;
            height: 8px;
            margin-left: 67px;
            padding-right: 0;
            line-height: 8px;
            background: transparent;
            border: 0;
          }
          .ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
          .ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
            position: relative;
            float: left;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            /* expand hover area */
          }
          .ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,
          .ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after {
            position: absolute;
            top: -12px;
            left: -26px;
            width: 60px;
            height: 32px;
            background: rgba(0, 0, 0, 0.001);
            content: '';
          }
          .ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,
          .ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon {
            position: relative;
            top: -1px;
            width: 10px;
            height: 10px;
            line-height: 10px;
          }
          .ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
            margin-top: 8px;
            margin-left: 0;
            background: none;
          }
          .ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
            top: 2px;
            left: -9px;
            margin: 0;
            padding: 22px 0 4px;
          }
          .ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
            left: 0;
          }
          .ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
            left: -2px;
          }
          .ant-steps-navigation {
            padding-top: 12px;
          }
          .ant-steps-navigation.ant-steps-small .ant-steps-item-container {
            margin-left: -12px;
          }
          .ant-steps-navigation .ant-steps-item {
            overflow: visible;
            text-align: center;
          }
          .ant-steps-navigation .ant-steps-item-container {
            display: inline-block;
            height: 100%;
            margin-left: -16px;
            padding-bottom: 12px;
            text-align: left;
            -webkit-transition: opacity 0.3s;
            transition: opacity 0.3s;
          }
          .ant-steps-navigation .ant-steps-item-container .ant-steps-item-content {
            max-width: auto;
          }
          .ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
            max-width: 100%;
            padding-right: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .ant-steps-navigation .ant-steps-item-container .ant-steps-item-title::after {
            display: none;
          }
          .ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button'] {
            cursor: pointer;
          }
          .ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role='button']:hover {
            opacity: 0.85;
          }
          .ant-steps-navigation .ant-steps-item:last-child {
            -webkit-box-flex: 1;
                -ms-flex: 1;
                    flex: 1;
          }
          .ant-steps-navigation .ant-steps-item:last-child::after {
            display: none;
          }
          .ant-steps-navigation .ant-steps-item::after {
            position: absolute;
            top: 50%;
            left: 100%;
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-top: -14px;
            margin-left: -2px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-bottom: none;
            border-left: none;
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
            content: '';
          }
          .ant-steps-navigation .ant-steps-item::before {
            position: absolute;
            bottom: 0;
            left: 50%;
            display: inline-block;
            width: 0;
            height: 2px;
            background-color: rgb(255, 144, 69);
            -webkit-transition: width 0.3s, left 0.3s;
            transition: width 0.3s, left 0.3s;
            -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
            content: '';
          }
          .ant-steps-navigation .ant-steps-item.ant-steps-item-active::before {
            left: 0;
            width: 100%;
          }
          @media (max-width: 480px) {
            .ant-steps-navigation > .ant-steps-item {
              margin-right: 0 !important;
            }
            .ant-steps-navigation > .ant-steps-item::before {
              display: none;
            }
            .ant-steps-navigation > .ant-steps-item.ant-steps-item-active::before {
              top: 0;
              right: 0;
              left: unset;
              display: block;
              width: 3px;
              height: calc(100% - 24px);
            }
            .ant-steps-navigation > .ant-steps-item::after {
              position: relative;
              top: -2px;
              left: 50%;
              display: block;
              width: 8px;
              height: 8px;
              margin-bottom: 8px;
              text-align: center;
              -webkit-transform: rotate(135deg);
                      transform: rotate(135deg);
            }
            .ant-steps-navigation > .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
              visibility: hidden;
            }
          }
          .ant-steps-rtl {
            direction: rtl;
          }
          .ant-steps.ant-steps-rtl .ant-steps-item-icon {
            margin-right: 0;
            margin-left: 8px;
          }
          .ant-steps-rtl .ant-steps-item-tail {
            right: 0;
            left: auto;
          }
          .ant-steps-rtl .ant-steps-item-title {
            padding-right: 0;
            padding-left: 16px;
          }
          .ant-steps-rtl .ant-steps-item-title::after {
            right: 100%;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
            margin-right: 0;
            margin-left: 16px;
          }
          .ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
            margin-left: 0;
          }
          .ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {
            padding-left: 0;
          }
          .ant-steps-rtl .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
            right: 0.5px;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-navigation.ant-steps-small .ant-steps-item-container {
            margin-right: -12px;
            margin-left: 0;
          }
          .ant-steps-rtl.ant-steps-navigation .ant-steps-item-container {
            margin-right: -16px;
            margin-left: 0;
            text-align: right;
          }
          .ant-steps-rtl.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title {
            padding-left: 0;
          }
          .ant-steps-rtl.ant-steps-navigation .ant-steps-item::after {
            right: 100%;
            left: auto;
            margin-right: -2px;
            margin-left: 0;
            -webkit-transform: rotate(225deg);
                    transform: rotate(225deg);
          }
          .ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
            margin-right: 0;
            margin-left: 12px;
          }
          .ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {
            margin-left: 0;
          }
          .ant-steps-rtl.ant-steps-small .ant-steps-item-title {
            padding-right: 0;
            padding-left: 12px;
          }
          .ant-steps-rtl.ant-steps-label-vertical .ant-steps-item-title {
            padding-left: 0;
          }
          .ant-steps-rtl.ant-steps-dot .ant-steps-item-tail,
          .ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail {
            margin: 0 70px 0 0;
          }
          .ant-steps-rtl.ant-steps-dot .ant-steps-item-tail::after,
          .ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after {
            margin-right: 12px;
            margin-left: 0;
          }
          .ant-steps-rtl.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,
          .ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot {
            right: 2px;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-dot .ant-steps-item-icon,
          .ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon {
            margin-right: 67px;
            margin-left: 0;
          }
          .ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
          .ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
            /* expand hover area */
          }
          .ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,
          .ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot {
            float: right;
          }
          .ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,
          .ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after {
            right: -26px;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {
            margin-right: 0;
            margin-left: 16px;
          }
          .ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail {
            right: -9px;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {
            right: 0;
            left: auto;
          }
          .ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {
            right: -2px;
            left: auto;
          }
          .ant-collapse-ghost {
            background-color: transparent;
            border: 0;
            width: 100%;
        }
        .ant-collapse > .ant-collapse-item > .ant-collapse-header {
          position: relative;
          padding: 12px 16px;
          padding-left: 40px;
          color: rgba(0, 0, 0, 0.85);
          line-height: 1.5715;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1.7rem;
      }
`;

export default class Timeline extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<GlobalStyle />
				<Head>
					<title>Doodle</title>
				</Head>
				<BestWrapper>
					<Doodle />
					<Wrapper>
						<Component {...pageProps} />
					</Wrapper>
					<Grey />
				</BestWrapper>
			</>
		);
	}
}

const Wrapper = styled.div`
	width: 100%;
	max-width: 37.5rem;
	min-height: 100%;
	background-color: white;
	position: relatvie;
`;

const Grey = styled.div`
	flex: 1;
	background-color: #fff;
	z-index: 100;
`;

const BestWrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100%;
`;
