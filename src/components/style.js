import Styled from 'styled-components';

const AuthFormWrap = Styled.div`
  border-radius: 6px;
  margin-top: 25px;
  box-shadow: 0 5px 20px rgba(140,144,164,.08);
  background-color: #FFFFFF;
  .ninjadash-authentication-top{
    padding: 20px;
    text-align: center;
    border-bottom: #E3E6EF;
    .ninjadash-authentication-top__title{
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
      margin-bottom: 0;
      color: #0A0A0A;
    }
  }
  .ninjadash-authentication-content{
    padding: 30px 40px;
    @media only screen and (max-width: 1599px){
      padding: 30px;
    }
    .ant-form-item-label {
      > label{
        font-size: 14px;
        color: #0A0A0A;
      }
    }
    .ant-form-item{
      margin-bottom: 25px;
    }
    .ant-input:focus,
    .ant-input-focused{
      box-shadow: 0 5px 20px rgba(251,53,134,.10);
    }
    .ant-input{
        padding: 12px 20px;
      &::placeholder{
        color: #A4A6AB;
      }
    }
    .ant-form-item-explain-error{
      font-size: 13px;
      margin-top: 2px;
    }
    .ninjadash-auth-extra-links{
      display: flex;
      justify-content: space-between;
      margin-top: -5px;
      .ant-checkbox-wrapper{
        span{
          font-size: 13px;
          color: #4D4F5A;
        }
        .ant-checkbox{
          &+span{
            position: relative;
            top: -2px;
          }
        }
      }
      .forgot-pass-link{
        font-size: 13px;
        color: #8231D3;
      }
    }
    .btn-signin {
        background-color: purple;
    }
    .btn-signin,
    .btn-reset,
    .btn-create{
      font-size: 14px;
      font-weight: 500;
      border-radius: 6px;
      width: 100%;
      min-height: 48px;
      margin-top: 25px;
    }
    .btn-reset{
      margin-top: 0;
    }
    .ninjadash-form-divider{
      font-size: 13px;
      color: #323541;
      text-align: center;
      position: relative;
      margin: 0 -10px 25px -10px;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 1px;
        background: #494B55;
      }
      span{
        font-weight: 500;
        padding: 0 15px;
        display: inline-block;
        position: relative;
        z-index: 2;
        background: #FFFFFF;
        color: #A4A5AA;
      }
    }
    .ant-input-affix-wrapper {
      &.ant-input-password{
        input{
          color: black;
        }
      }
    }
    .ninjadash-social-login{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -6px;
      @media only screen and (max-width: 767px){
        justify-content: center;
      }
      &.signin-social{
        li{
          a{
            background-color: #fff;
          }
        }
      }
      li{
        padding:15px 6px;
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          height: 48px;
          padding: 0 15px;
          background: #323541;
          color: #A4A5AA;
          font-weight: 500;
          transition: background-color 0.3s;
          @media only screen and (max-width: 1399px){
            padding: 0 12px;
          }
          @media only screen and (max-width: 379px){
            height: 44px;
          }
          span:not(.anticon){
            display: inline-block;
            margin-left: 5px;
          }
          svg,
          i{
            width: 20px;
            height: 20px;
          }
          &.google-social{
            background-color: #F0654810;
            color: #F06548;
            &:hover{
              background-color: #F06548;
              svg path{
                fill: #FFFFFF;
              }
            }
            svg path{
              fill: #F06548;
            }
            div{
              height: 20px;
            }
          }
          &.facebook-social{
            background-color: #3A589B10;
            color: #3A589B;
            &:hover{
              background-color: #3A589B;
              color: #FFFFFF;
            }
          }
          &.twitter-social{
            background-color: #03A9F410;
            color: #03A9F4;
            &:hover{
              background-color: #03A9F4;
              color: #FFFFFF;
            }
          }
          &.github-social{
            background-color: #03A9F410;
            color: #090E30;
            &:hover{
              background-color: #03A9F4;
              color: #FFFFFF;
            }
          }
        }
      }
    }
    .ant-input-affix-wrapper{
    }
  }
  .ninjadash-authentication-bottom{
    text-align: center;
    padding: 25px;
    border-radius: 0 0 6px 6px;
    background-color: #EFF0F3;
    p{
      font-size: 14px;
      font-weight: 500;
      color: #404040;
      margin-bottom: 0;
      a{
        margin-left: 6px;
        #8231D3;
      }
    }
  }
  .auth-contents{
    display: flex;
    align-items: center;
    justify-content: center;
    form{
      width: 420px;
      h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 45px;
        @media only screen and (max-width: 767px){
          margin-bottom: 28px;
        }
        input::placeholder{
          color: #A0A0A0;
        }
      }
      .auth-form-action{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 379px){
          flex-flow: column;
          .forgot-pass-link{
            margin-top: 15px;
          }
        }
      }
    }
    #forgotPass{
      .forgot-text{
        margin-bottom: 25px;
      }
      .return-text{
        margin-top: 35px;
      }
    }


  }
  .auth0-login{
    margin: -6px;
    display: flex;
    flex-wrap: wrap;
  a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      height: 48px;
      padding: 0 30px;
      background: #F8F9FB;
      color: #666D92;
      font-weight: 500;
      border: 0 none;
      border-radius: 5px;
      margin: 6px;
      flex: 1;
      @media (max-width:480px){
        flex: none;
        width: 100%;
      }
  }
}
`;

const Main = Styled.div`
    padding: 0px 30px 20px;
    min-height: 715px;
    background-color: transparent;
    &.grid-boxed{
        padding: 0px 180px 20px;
        @media only screen and (max-width: 1599px){
            padding: 0px 130px 20px;
        }
        @media only screen and (max-width: 1399px){
            padding: 0px 50px 20px;
        }
        @media only screen and (max-width: 991px){
            padding: 0px 30px 20px;
        }
    }

    .doughnutchart-inner{
        position: relative;
        .doughnutchart-inner-text{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            line-height: 1;
            margin-bottom: 0px;
            display: inline-block;
            transform: translate(-50%, -50%);
            .doughnutchart-inner-content{
                font-size: 30px;
                font-weight: 600;
                line-height: 1;
                color: #0A0A0A;
                display: block;
            }
            .doughnutchart-inner-label{
                font-size: 15px;
                color: #404040;
            }
        }
        canvas{
            margin: 0 auto;
        }
    }
    .ant-switch{
        .anticon svg{
            color: #fff;
        }
    }
    /* ant breadcrumb */
    .ant-breadcrumb {
        a{
            color: #404040;
        }
    }
    
    .page-header-actions{
        .ant-btn-white{
            color: #404040 !important;
            background-color: #F8F9FB;
            &:hover{
                background-color: #F8F9FB !important;
            }
        }
    }
    /* Card Title */
    .ant-card{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            color: #0A0A0A;
        }
    }
    .ant-card{
        &.ninjadash-ghost-card{
            .ant-card-body{
                background: linear-gradient(90deg, rgb(95, 99, 242), rgb(255, 105, 165));
            }
        }
    }
    
    .ant-card-head-title{
        color: #0A0A0A;
    }
    .ant-card-bordered{
        background-color: #FFFFFF;
        border-color: #F1F2F6;
    }
    .ant-card-head{
        border-bottom-color: #F1F2F6;
        background-color: #FFFFFF;
        .ninjadash-card-title-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .ninjadash-card-title-text{
                font-size: 18px;
                font-weight: 600;
                display: inline-block;
                margin-right: 0;
                color: #0A0A0A;
                .ninjadash-card-subtitile{
                    font-size: 12px;
                    margin-right: 6px;
                    color: #404040;
                }
            }
            .ninjadash-card-title-extra-text{
                display: flex;
                align-items: center;
                position: relative;
                top: 3px;
                .ninjadash-total-chart-total{
                    font-size: 18px;
                    font-weight: 600;
                    color: #0A0A0A;
                    @media only screen and (max-width: 991px){
                        font-size: 15px;
                    }
                }
                .ninjadash-total-chart-status{
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    margin-right: 8px;
                    @media only screen and (max-width: 991px){
                        font-size: 12px;
                    }
                    i,
                    svg{
                        width: 22px;
                        height: 22px;
                        margin-right: -1px;
                        margin-right: -1px;
                        @media only screen and (max-width: 991px){
                            width: 18px;
                            height: 18px;
                        }
                    }
                    &.ninjadash-total-chart-status-growth{
                        color: #01B81A;
                    }
                    &.ninjadash-total-chart-status-down{
                        color: #FF0F0F;
                    }
                }
            }
        }
    }

    .ant-card-body{
        p{
            color: #404040;
        }
    }

    .ninjadash-card-nav{
        ul{
            display: flex;
            align-items: center;
            margin: 0 -10px 2px 0;
            margin: 0 -10px 2px 0;
            li{
                margin: 5px 0;
                a{
                    font-size: 13px;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 6px;
                    min-height: 30px;
                    padding: 0 12px;
                    transition: .3s;
                    color: #747474;
                    &:hover{
                        color: #8231D3;
                    }
                }
                &.ninjadash-active{
                    a{
                        background-color: #F2EAFB;
                        color: #8231D3;
                    }
                }
            }
        }
    }

    .ant-card-rtl .ant-card-extra{
        margin-right: 0 !important;
        
    }
    .ant-tabs-tab span svg {        
        padding-left: 5px;
    }
    .ant-btn{
        &.ant-btn-light{
            color: #ffffff;
            &.btn-transparent,
            &.btn-outlined{
                color: #404040;
            }
            &.btn-outlined:hover{
                color: #8231D3;
            }
        }
    }
    /* Pagination Style */
    .ant-pagination-item{
        border-radius: 4px;
    }
    .ant-pagination-item a{
        font-weight: 400;
    }
    .ant-pagination-next svg{
        fill: #404040;
    }

    .ant-pagination-options .ant-select-selector{
        padding: 0 6.5px
    }
    .ant-pagination-options .ant-select .ant-select-arrow{
        svg{
            width: 10px;
            fill: #404040;
        }
    }
    
    /* Picker Under Input */
    .ant-form-item-control-input .ant-picker {
        padding: 0 0 0 12px !important;
    }

    /* progressbars */

    .ant-progress {
        display: inline-flex !important;
        align-items: center;
        .ant-progress-inner{
            /* background-color: #F8F9FB; */
            background-color: transparent;
        }
        .ant-progress-text{
            color: #404040;
        }
        .ant-progress-circle-trail{
            background-color: #F8F9FB;
        }
    }

    .ant-progress>div {
        display: flex;
        flex-direction: column;
    }

    .ant-progress .ant-progress-outer {
        margin-right: 0 !important;
        padding-right: 0 !important;
    }

    .ant-progress .ant-progress-text {
        order: 0;
        align-self: flex-end;
        text-align: center;
    }

    .ant-progress-status-warning .ant-progress-bg {
        background: #fa8b0c;
    }

    /* progress bars */
    
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media only screen and (max-width: 991px){
        min-height: 580px;
    }
    .w-100{
        width: 100%;
    }
    .product-sidebar-col{
        @media only screen and (max-width: 767px){
            order: 2;
        }
    }
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }

    /* Button Group */
    .ant-btn-group{
        .ant-btn-default{
            border-color: #E3E6EF;
            background-color: #F8F9FB; 
        }
    }

    /* ant skeleton */
    .ant-skeleton{
        &.ant-skeleton-active{
            .ant-skeleton-content {
                .ant-skeleton-title{
                    background: linear-gradient(90deg, #F1F2F6 25%, #E3E6EF 37%, #F1F2F6 63%);
                    background-size: 400% 100%;
                }
                .ant-skeleton-paragraph{
                    >li{
                        background: linear-gradient(90deg, #F1F2F6 25%, #E3E6EF 37%, #F1F2F6 63%);
                        background-size: 400% 100%;
                    }
                }
            }
            .ant-skeleton-avatar{
                background: linear-gradient(90deg, #F1F2F6 25%, #E3E6EF 37%, #F1F2F6 63%);
                background-size: 400% 100%;
            }
        }
        .ant-skeleton-content {
            .ant-skeleton-title{
                background-color: #F1F2F6;
            }
            .ant-skeleton-paragraph{
                >li{
                    background-color: #F1F2F6;
                }
            }
        }
        .ant-skeleton-header{
            .ant-skeleton-avatar{
                background-color: #F1F2F6;
            }
        }
    }

    /* ant picker */
    .ant-picker{
        background-color: #ffffff;
        border-color: #E3E6EF;
        input{
            color: #404040;
            &::placeholder{
                color: #747474;
            }
        }
        .ant-picker-suffix{
            svg{
                color: #404040;
            }
        }
    }

    /* ant checkbox */
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-radius: 4px;
            }
        }
        &.ant-checkbox-checked{
            &:after{
                border-color: #8231D3;
                border-radius: 4px;
            }
            .ant-checkbox-inner{
                background-color: #8231D3;
                border-color: #8231D3;
                &:after{
                    top: 44%;
                    border-color: #fff;
                }
            }
        }
        &.ant-checkbox-indeterminate{
            .ant-checkbox-inner{
                &:after{
                    background-color: #8231D3;
                }
            }
        }
    }
    .ant-checkbox-wrapper{
        &.ant-checkbox-wrapper-disabled{
            opacity: .5;
        }
        .ant-checkbox{
            &+span{
                color: #404040;
            }
        }
    }
    .ant-checkbox-wrapper,
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-color: #8231D3;
            }
        }
        .ant-checkbox-input{
            &:focus{
                &+.ant-checkbox-inner{
                    border-color: #8231D3;
                }
            }
        }
    }
    .ant-checkbox-inner{
        border-radius: 4px;
        background-color: #FFFFFF;
        border-color: #C6D0DC;
    }

    /* ant alert */
    .ant-alert-closable{
        .ant-alert-message{
          margin-right: 15px;
        }
    }

    .ant-alert-with-description .ant-alert-description{
        display: inline-block;
    }

    /* ant Calendar Picker */
    .ant-picker-calendar{
        .ant-badge-status-text{
            color: #404040;
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-year-select{
        @media only screen and (max-width: 400px){
            width: 50% !important;
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-month-select{
        @media only screen and (max-width: 400px){
            width: calc(50% - 8px) !important
        }
    }

    /* Card Grid */
    .card-grid-wrap{
        .ant-card-grid{
            @media only screen and (max-width: 575px){
                width: 50% !important
            }
        }
    }

    /* Drawer */
    .atbd-drawer{
        .ant-card-body{
            text-align: center;
            .ant-drawer-wrapper-body {
                text-align: right;
            }
        }
    }
    .drawer-placement{
        @media only screen and (max-width: 400px){
            text-align: center;
        }
        .ant-radio-group{
            @media only screen and (max-width: 400px){
                margin-bottom: 15px;
            }
        }
    }
    .ant-drawer-content-wrapper{
        @media only screen and (max-width: 400px){
            width: 260px !important;
        }
        @media only screen and (max-width: 375px){
            width: 220px !important;
        }
    }

    /* Input */
    .input-wrap{
        @media only screen and (max-width: 991px){
            min-height: 500px;
        }
        input::placeholder{
            color: #747474;
        }
    }
    /* Modal Buttons */
    .modal-btns-wrap{
        margin: 0 -5px;
    }
    /* spinner */
    .ant-spin{
        margin-right: 20px;
        &:last-child{
            margin-right: 0;
        }
    }

    /* Column Cards Wrapper */
    .columnCardsWrapper{
        background: #EFF0F3;
        border-radius: 4px;
        padding: 50px 30px 25px;
    }
    .columnCardsWrapper .ant-card{
        background: #FFFFFF;
    }
    .columnCardsWrapper .ant-card-head{
        background: #FFFFFF;
    }

    /* Ant Collapse */
    .ant-collapse{
        background-color: #FFFFFF;
        border-color: #F1F2F6;
        border-radius: 6px;
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0 0 6px 6px;
                background-color: #F8F9FB;
                >.ant-collapse-header{
                    border-radius: 0 0 6px 6px;
                }
            }
            .ant-collapse-item{
                &:last-child{
                    background-color: transparent;
                }
                .ant-collapse-header{
                    border-radius: 6px;
                }
            }
            .ant-collapse-content{
                background-color: #FFFFFF;
                .ant-collapse-content-box{
                    background-color: #FFFFFF;
                }
            }
        }
        .ant-collapse-header{
            .ant-collapse-header-text{
                color: #0A0A0A;
            }
        }
    }
    .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
        color: #404040;
        padding: 12px 16px 10px 45px;
        background-color: #F8F9FB;
        @media only screen and (max-width: 1299px){
            padding: 12px 16px 10px 30px;
        }
    }
    .ant-collapse-content p{
        color: #747474;
        margin-bottom: 0;
    }
    .ant-collapse-content > .ant-collapse-content-box {
        padding: 20px 20px 20px;
    }
    .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
        padding: 10.5px 20px;
    }
    .ant-collapse.ant-collapse-borderless{
        background-color: #FFFFFF;
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0px;
            }
        }
    }
    .ant-collapse > .ant-collapse-item,
    .ant-collapse .ant-collapse-content{
        border-color: #F1F2F6;
    }
    .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
        color: #A0A0A0 !important;
    }

    .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
        font-size: 8px;
        position: relative;
        top: 0;
        right: 0;
    }

    .ant-collapse .ant-collapse {
        border: 0 none;
        background: #FFFFFF;
    }

    .ant-collapse .ant-collapse > .ant-collapse-item {
        border-bottom: 0;
    }
    .ant-collapse .ant-collapse .ant-collapse-header{
        border-radius: 6px 6px 0 0;
        border: 1px solid #F1F2F6;
        background: #F8F9FB;
    }
    .ant-collapse .ant-collapse .ant-collapse-content{
        margin: 20px 0 0 0;
        border: 1px solid #F1F2F6;
        border-radius: 0;
    }

    /* Ant Radio */
    .ant-radio-wrapper{
        .ant-radio{
            &+span{
                color: #404040;
            }
        }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within{
        box-shadow: 0 0;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
        background-color: #8231D3;
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child{
        border-right-color: #8231D3;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child{
        border-color: #8231D3;
    }
    .ant-radio-button-wrapper{
        height: 48px;
        line-height: 46px;
        padding: 0 25.25px;
        color: #404040;
        background-color: #ffffff;
        border-color: #F1F2F6;
        @media only screen and (max-width: 1024px){
            padding: 0 10px;
        }
        @media only screen and (max-width: 379px){
            height: 40px !important;
            line-height: 38px !important;
            font-size: 12px;
            padding: 0 6px;
        }
        &:not(:first-child){
            &:before{
                background-color: #F1F2F6;
            }
        }
        &.ant-radio-button-wrapper-checked{
            color: #ffffff;
        }
    }

    /* Select */
    .ant-tree-select .ant-select-selector{
        height: 42px;
    }
    .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector{
            background-color: #ffffff;
            border-color: #E3E6EF;
        }
    }
    .tag-select-list{
        margin-bottom: -10px;
        .ant-select{
            margin-bottom: 10px;
        }
    }
    .ant-select-selector{
        border-color: #E3E6EF !important;
    }

    .ant-select{
        .ant-select-selector {
            .ant-select-selection-item{
                color: #404040;
            }
        }
        &.ant-select-disabled{
            opacity: .6;
        }
        &.ant-select-multiple{
            .ant-select-selection-item{
                height: 24px;
                align-items: center;
                color: #404040;
                padding-right: 8px;
                background-color: #FFFFFF;
                border-color: #E3E6EF;
            }
        }
        
        &.ant-select-lg{
            height: 50px;
            line-height: 48px;
            .ant-select-selector{
                height: 50px !important;
                line-height: 48px;
            }
            .ant-select-selection-item{
                line-height: 48px !important;
                padding-right: 8px;
            }
            &.ant-select-multiple.ant-select-lg .ant-select-selection-item{
                height: 32px;
                line-height: 32px !important;
            }
        }
        &.ant-select-multiple.ant-select-sm{
            .ant-select-selection-item{
                height: 16px;
                line-height: 14px;
                font-size: 11px;
            }
        }
        .ant-select-arrow{
            svg{
                color: #404040;
            }
        }
    }

    /* Slider */
    .slider-with-input{
        .ant-slider{
            margin-right: 15px;
        }
        .slider-with-input__single{
            margin-bottom: 15px;
        }
        .ant-input-number{
            background-color: #ffffff;
            border-color: #F1F2F6;
        }
        .ant-input-number-input{
            background-color: #ffffff;
            border-color: #F1F2F6;
        }
    }

    .ant-slider-mark-text{
        color: #404040;
    }

    .anticon svg{
        color: #747474;
    }

    .ant-slider-handle{
        background-color: #ffffff
    }

    /* ant input */
    .ant-input,
    .ant-input-affix-wrapper{
        color: #404040;
        background-color: #ffffff;
        border-color: #E3E6EF;
        &:focus{
            border-color: #E3E6EF;
            box-shadow: 0 0;
        }
        input.ant-input{
            &:focus{
                border-color: #E3E6EF;
                box-shadow: 0 0 !important;
            }
        }
    }

    .ant-input-affix-wrapper{
        &:not(.ant-input-affix-wrapper-disabled){
            &:hover{
                border-color: #E3E6EF;
            }
        }
    }
    .ant-input-affix-wrapper-focused{
        box-shadow: 0 0;
    }

    /* Taglist */
    .ant-tag{
        margin: 5px;
    }
    .taglist-wrap{
        margin: -5px;
        .ant-tag {
            line-height: 22px;
            padding: 0 10.2px;
            border: 0 none;
            margin: 5px;
            color: #404040;
            &.ant-tag-has-color{
                color: #fff !important;
            }
            &.ant-tag-magenta{
                color: #eb2f96;
            }
            &.ant-tag-red{
                color: #f5222d;
            }
            &.ant-tag-volcano{
                color: #fa541c;
            }
            &.ant-tag-orange{
                color: #fa8c16;
            }
            &.ant-tag-gold{
                color: #faad14;
            }
            &.ant-tag-line{
                color: #a0d911;
            }
            &.ant-tag-green{
                color: #a0d911;
            }
            &.ant-tag-cyan{
                color: #13c2c2;
            }
            &.ant-tag-blue{
                color: #1890ff;
            }
            &.ant-tag-geekbule{
                color: #2f54eb;
            }
            &.ant-tag-purple{
                color: #722ed1;
            }
        }
    }

    .ant-tag {
        color: #0A0A0A;
        background-color: #EFF0F3;
        border-color: #E3E6EF;
        a{
            color: #0A0A0A;
        }
        svg{
            color: #404040;
        }
    }

    /* ant empty */

    .ant-empty-description{
        color: #404040;
    }

    /* Steps style */
    .ant-steps-item-finish,
    .ant-steps-item-wait {
        .ant-steps-item-icon{
            background-color: #FFFFFF;
        }
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: #404040;
                }
            }
        }
    }

    .steps-content{
        color: #404040;
    }

    .ant-steps-item-wait {
        .ant-steps-item-icon{
            border-color: #F1F2F6;
            .ant-steps-icon{
                color: #404040;
            }
        }
    }

    .ant-steps-item-process{
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: #0A0A0A;
                }
            }
        }
    }

    /* Timepicker List */
    .timepicker-list{
        margin: -5px;
        .ant-picker{
            margin: 5px;
        }
    }

    /* ant statistics */

    .ant-statistic {
        .ant-statistic-title{
            color: #747474;
        }
        .ant-statistic-content{
            color: #0A0A0A;
        }
    }
    .ant-statistic-content{
        .anticon {
            &.anticon-arrow-up{
                svg{
                    color: #01B81A;
                }
            }
            &.anticon-arrow-down{
                svg{
                    color: #FF0F0F;
                }
            }
        }
    }

    /* Ant Menu */
    .ant-menu{
        background-color: #FFFFFF;
        border-color: #F1F2F6;
        .ant-menu-submenu-title{
            svg,
            .ant-menu-title-content,
            .ant-menu-submenu-arrow{
                color: #747474;
            }
            &:active{
                background-color: #F2EAFB;
            }
        }
        .ant-menu-item{
            &:active{
                background-color: #F2EAFB;
            }
            &.ant-menu-item-selected{
                &:after{
                    border-color: #8231D3;
                }
                .ant-menu-item-icon{
                    svg{
                        color: #8231D3;
                    }
                }
                .ant-menu-title-content{
                    color: #8231D3;
                }
            }
            &.ant-menu-item-disabled{
                .ant-menu-item-icon{
                    color: #A0A0A0;
                }
                .ant-menu-title-content{
                    opacity: .5;
                    color: #A0A0A0;
                }
            }
            &.ant-menu-item-active{
                color: #8231D3;
            }
        }
        .ant-menu-submenu {
            &.ant-menu-submenu-selected{
                .ant-menu-submenu-title{
                    span{
                        color: #8231D3;
                    }
                }
            }
        }
        &.ant-menu-inline{
            .ant-menu-submenu-title svg{
                position: relative;
                top: 2px;
            }
            .ant-menu-submenu {
                &.ant-menu-submenu-open,
                &.ant-menu-submenu-active{
                    .anticon {
                        svg{
                            color: #8231D3;
                        }
                    }
                    svg{
                        color: #8231D3;
                    }
                    .ant-menu-submenu-arrow{
                        color: #8231D3;
                    }
                }
            }
        }
        &:not(.ant-menu-horizontal){
            .ant-menu-item-selected,
            .ant-menu-submenu-open{
                background-color: #F2EAFB;
                &.ant-menu-item-active{
                    color: #8231D3;
                }
            }
        }
    }

    .ant-menu-horizontal{
        &:not(.ant-menu-dark){
            > .ant-menu-submenu{
                &:hover{
                    .ant-menu-submenu-title{
                        svg,
                        .ant-menu-title-content{
                            color: #8231D3;
                        }
                    }
                    &:after{
                        border-bottom-color: #8231D3;
                    }
                }
            }
        }
    }

    /* ant result */
    .ant-result{
        &.ant-result-success{
            .anticon svg{
                color: #01B81A;
            }
        }
        &.ant-result-info{
            .anticon svg{
                color: #00AAFF;
            }
        }
        &.ant-result-warning{
            .anticon svg{
                color: #FA8B0C;
            }
        }
        &.ant-result-error{
            .anticon svg{
                color: #FF0F0F;
            }
        }
        .ant-result-title{
            color: #0A0A0A;
        }
        .ant-result-subtitle{
            font-size: 13px;
            color: #404040;
        }
        .ant-result-content{
            background-color: #F8F9FB;
            .ant-typography{
                color: #404040;
                a{
                    margin-left: 4px;
                    margin-right: 4px;
                }
            }
        }
    }

    .ant-result-extra{
        .ant-btn-default{
            color: #404040;
            border-color: #E3E6EF;
            background-color: #F8F9FB;
        }
    }

    /* Ant Comment */
    .ant-comment-inner{
        padding: 0;
        .ant-comment-content-author,
        .ant-comment-content-author-name{
            >*{
                color: #404040;
            }
        }
    }
    .ant-comment-content-detail p{
        color: #747474;
    }
    .ant-list-items{
        padding-top: 22px;
    }
    .ant-list-items li:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment-nested{
        margin-top: 22px;
    }
    .ant-comment-actions li span{
        color: #A0A0A0;
    }
    .ant-comment-content-detail textarea{
        resize: none;
        min-height: 170px;
        border-radius: 5px;
        background-color: #ffffff;
        border-color: #E3E6EF;
    }
    .nested-comment-wrapper  {
        .comment-title{
            font-size: 12px;
            padding-bottom: 10px;
            margin-bottom: 22px;
            border-bottom: 1px solid #E3E6EF;
        }
        
    }

    .ant-list-split .ant-list-header{
        color: #404040;
        border-color: #F1F2F6;
    }

    /* ant list */
    .ant-list{
        &.ant-list-bordered{
            color: #404040;
            border-color: #E3E6EF;
        }
        .ant-list-item-meta{
            padding: 10px 24px; 
            border-color: #F1F2F6;
        }
        .ant-list-item-meta-description{
            color: #404040;
        }
    }

    /* Vector Map */
    .rsm_map{
        min-height: 505px;
        .world-map{
            width: 100%;
            height: auto;
            @media only screen and (max-width: 1599px){
                height: 480px;
            }
            @media only screen and (max-width: 1399px){
                height: 400px;
            }
            @media only screen and (max-width: 575px){
                height: 400px;
            }
            @media only screen and (max-width: 767px){
                height: 300px;
            }
            @media only screen and (max-width: 575px){
                height: 250px;
            }
            @media only screen and (max-width: 479px){
                height: 350px;
            }
            @media only screen and (max-width: 375px){
                height: 240px;
            }
        }
        .controls{
            position: absolute;
            right: 30px;
            bottom: 30px;
            button{
                display: block;
                width: 27px;
                height: 27px;
                background: none;
                color: #ffffff;
                border: 1px solid #F1F2F6;
                padding: 0;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #FFFFFF;
                cursor: pointer;
                &:first-child{
                    border-radius: 6px 6px 0 0;
                }
                &:last-child{
                    border-radius: 0 0 6px 6px;
                }
                &:focus{
                    outline: none;
                }
                svg{
                    width: 10px;
                    color: #404040;
                }
            }
            button + button{
                border-top: 0 none;
            }
        }
    }

    /* Checkout Wrapper */
    .checkoutWraper{
        .ant-card-body{
            padding: 50px 50px 50px 30px !important;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .ant-steps{
            margin-top: 0;
        }
        .step-action-wrap{
            @media only screen and (max-width: 1599px){
                margin-bottom: 50px;
            }
            @media only screen and (max-width: 767px){
                margin-bottom: 30px;
            }
        }
    }

    /* Star Active */
    a{
        i,
        span.fa{
          font-size: 16px;
          color: #A0A0A0;
        }
        &.starDeactivate{
          i:before{
            content: "\f31b";
          }
        }
        &.starActive{
          i,
          span.fa{
            color: #FA8B0C;
          }
          i:before,
          span.fa:before{
            color: #FA8B0C;
            content: "\f005";
    
          }
        }
    }

    .ant-timeline{
        color: #404040;
        .ant-timeline-item-content{
            font-size: 16px;
        }
    }

    .ant-timeline-item-tail{
        border-width: 3px;
        border-color: #F1F2F6;
    }

    
    .ant-rate-content{
        font-weight: 500;
        color: #404040;
    }

    .ant-rate-text{
        color: #404040;
    }

    .ant-rate{
        .anticon {
            svg{
                color: #FA8B0C;
            }
        }
    }

    .ant-rate-star.ant-rate-star-zero span svg{
        color: #c6d0dc;
    }

    .account-card{
        .ant-card-head{
            .ant-card-extra{
                @media only screen and (max-width: 575px){
                   padding-top: 0 !important;
                }
            }
            
        }
                
    }

    /* Rechart */
    .recharts-default-legend{
        .recharts-legend-item{
            min-width: 100px !important;
        }
    }

    /*  Radio */
    .ant-radio{
        &.ant-radio-disabled{
            opacity: .4;
            &+span{
                opacity: .4;
            }
        }
    }
    .radio-size-wrap{
            .ant-radio-button-wrapper{
                @media only screen and (max-width: 1450px){
                    padding: 0 11.5px;
            }
        }
    }
    .ant-radio-wrapper:hover .ant-radio, 
    .ant-radio:hover .ant-radio-inner, 
    .ant-radio-input:focus + .ant-radio-inner{
        border-color: #8231D3;
        outline: none;
        box-shadow: 0 0;
    }

    .ant-radio-inner{
        transition: 0s;
        background-color: #ffffff;
        border-color: #E3E6EF;
    }
    .ant-radio-checked{
        .ant-radio-inner{
            border-color: #8231D3;
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-disabled{
            opacity: .4;
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-checked{
            &.ant-radio-button-wrapper-disabled{
                background-color: #8231D3;
            }
        }
    }
    

    /* Message  */
    .message-button-list{
        margin: -4px;
        .ant-btn {
            margin: 4px;
        }
    }
    /* Chart Label */

    .chart-label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
        color: #5a5f7d;
    }

    .chart-label .label-dot {
        margin-right: 8px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
    }

    .chart-label .label-dot.dot-success {
        background: #20c997;
    }

    .chart-label .label-dot.dot-info {
        background: #5f63f2;
    }

    .chart-label .label-dot.dot-warning {
        background: #fa8b0c;
    }

    .chart-label .label-dot {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 10px;
    }

    // Ant comment action
    .ant-comment-actions{
        li{
            position: relative;
            &:not(:last-child){
                margin-right: 8px;
                padding-right: 8px;
                &:after{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 12px;
                    background-color: #C6D0DC;
                    content: '';
                }
            }
            .com-time{
                cursor: default;
            }
            span{
                margin-right: 0;
            }
        }
    }

    // Emoji Picker React
    .emoji-picker-react{
        top: 15px;
        right: 25px;
        box-shadow: 0 5px 10px #efefef10;
        @media only screen and (max-width: 479px){
            top: 25px;
            right: -50px;
            width: 260px;
        }
        .emoji-categories{
            padding: 0 10px;
        }
        .emoji-search{
            margin: 0 10px;
        }
        .content-wrapper:before{
            display: none;
        }
        .emoji-group{
            padding: 0 10px;
        }
        .emoji-group:before{
            font-size: 12px;
            font-weight: 600;
            color: #0A0A0A;
        }
        .emoji-group .emoji-img{
            margin: 5px !important;
        }
    }

    .wizard-side-border{
        >.ant-card{
            .ant-card-body{
                padding: 0 25px !important;
            }
        }
        .checkout-successful{
            >.ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px !important;
                    }
                }
            }
        }
        .payment-method-form.theme-light{
            .shipping-selection__card{
                .ant-card-body{
                    padding: 25px 0 !important;
                }
            }
        }
        .shipping-selection__card{
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .atbd-review-order{
            .ant-card-body{
                padding: 25px 25px 0 !important;
                @media only screen and (max-width: 767px) {
                    padding: 15px 15px 0 !important;
                }
            }
        }
        
        .ant-steps {
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
        }
        .steps-wrapper{
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
        }
    }
    .editor-compose > div {
        position: static;
        max-width: 100%;
        margin: 0 0 25px;
    }

    // Ant Dragger
    .ant-upload-drag{
        background-color: #FFFFFF !important;
        border-radius: 10px !important;
        display: flex;
        align-items: center;
        min-height: 100px;
        border-color: #C6D0DC;
        &.ninjadash-uploader-large{
            min-height: 180px;
        }
        .ant-upload-drag-container{
            .ant-upload-text{
                margin-bottom: 0;
                font-size: 15px;
                color: #9299B8;
            }
        }
    }

    .ant-upload{
        .ant-btn-light{
            color: #404040;
            &:hover{
                border-color: #8231D3;
            }
            svg{
                color: #404040;
            }
        }
    }

    .ant-upload-list-item{
        .ant-upload-list-item-info{
            border-radius: 6px;
            padding: 0px 8px;
            background-color: transparent;
            svg{
                color: #404040;
            }
            a{
                color: #8231D3;
            }
        }
    }

    // Form Validation
    .ant-form-item{
        &.ant-form-item-has-success{
            .ant-input{
                border-color: #01B81A;
            }
            &.ant-form-item-with-help{
                .ant-form-item-explain{
                    color: #01B81A;
                }
            }
        }
        &.ant-form-item-with-help{
            .ant-form-item-explain{
                margin-top: 6px;
            }
        }
    }
    /* Order Summery */
    .ninjadash-order-summery{
        background-color: #F8F9FB;
    }

    .ant-table{
        background-color: #FFFFFF;
    }

    .ant-table-thead {
        > tr {
            > th{
                background-color: #F8F9FB;
                border-color: #F1F2F6;
                color: #0A0A0A;
            }
        }
    }
    .ant-table-tbody{
        >tr{
            >td{
                border-color: #F1F2F6;
                background-color: #FFFFFF;
                color: #404040;
            }
            &:hover{
                >td{
                    background-color: #F8F9FB;
                }
            }
        }
    }
    .ant-btn-transparent,
    .btn-outlined,
    .ant-btn-white
    {
        .anticon-loading{
            svg{
                color: #8231D3;
            }
        } 
    }
    .anticon-loading{
        svg{
            color: #fff;
        }
    }

    .ninjadash-action-count{
        padding-right: 8px;
    }
`;

export { AuthFormWrap, Main };
