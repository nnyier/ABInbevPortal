<template>
    <div class="index-header">
        <a href="https://www.ab-inbev.cn/" class="navbar-brand">
            <img src="../../common/img/logo.png" height="28" alt="">
        </a>
        <div class="pc">
            <div class="navbar-left">
                <router-link to="/home">首&nbsp;&nbsp;页</router-link>
                <router-link to="/reports">报&nbsp;&nbsp;表</router-link>
            </div>
            <div class="navbar-right">
                <router-link to="/help">帮助</router-link>
                <router-link to="/lang">
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            语言
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>CN</DropdownItem>
                            <DropdownItem>EN</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </router-link>
                <router-link to="/user">
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            用户
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem>Signout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </router-link>
            </div>
        </div>
        <div class="hide-mobile">
            <div class="dropdown">
                <div class="btn-dropdown">
                    <Button type="primary" @click="toggleDropdown" id="toggler-btn">
                        <Icon type="navicon-round" id="toggler-icon"></Icon>
                    </Button>
                </div>
                <div class="dropdown-menu" v-show="isShow" ref="dropdownmenu">
                    <ul class="item-list">
                        <router-link tag="li" to="/home">首页</router-link>
                        <router-link tag="li" to="/reports">报表</router-link>
                        <router-link tag="li" to="/help">设置</router-link>
                        <router-link tag="li" to="/lang">语言</router-link>
                        <router-link tag="li" to="/user">用户</router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      lists: [
        {
          id: "0001",
          cnName: "首页",
          enName: "Home"
        },
        {
          id: "0002",
          cnName: "报表",
          enName: "Reports"
        }
      ]
    };
  },
  created() {
    let body = document.querySelector("body");
    body.addEventListener(
      "click",
      e => {
        // console.log(e.target.id === "toggler-icon");
        if (e.target.id === "toggler-btn" || e.target.id === "toggler-icon") {
          this.isShow = true;
        } else {
          //  如果点击的是按钮以外的地方，就设置isShow为false
          this.isShow = false;
        }
      },
      false
    );
  },

  methods: {
    toggleDropdown(e) {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/css/variables.styl';

.index-header>>>.ivu-btn-primary {
    background-color: #890000;
    border-color: #890000;
}

.index-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    background: #ffffff;
    color: #fff;
    font-size: 0.28rem;
    border-bottom: 1px solid #c43300;
    z-index: 10000;

    .navbar-brand {
        margin: 0 10px;
        float: left;
    }

    .pc {
        padding: 0 20px;

        .navbar-left {
            float: left;
        }

        .navbar-right {
            float: right;
        }

        a {
            color: #777777;
            font-size: 12px;
            font-family: 'Arial Narrow Bold', sans-serif;
            padding: 15px 15px;
        }
    }

    .hide-mobile {
        position: relative;

        .dropdown {
            width: 100%;

            .btn-dropdown {
                position: absolute;
                right: 20px;
                top: 0;
            }

            .dropdown-menu {
                position: absolute;
                top: 47px;
                left: 0;
                width: 100%;
                background: #e7e7e7;

                .item-list {
                    color: #890000;
                    border-bottom: 1px solid #d1c4c3;

                    li {
                        padding-left: 20px;
                    }

                    .router-link-active {
                        background: #890000;
                        color: #fff;
                    }

                    .router-link-exact-active {
                        background: #890000;
                        color: #fff;
                    }

                    .item {
                        border-bottom: 1px solid #ddd;

                        a {
                            margin-left: 20px;
                            color: #777;
                        }
                    }
                }
            }
        }

        .ivu-select-dropdown {
            position: relative;
            width: 100%;
            height: auto;
        }
    }
}

.index-header>>>.router-link-active {
    color: #892000;
    background: #ffffff;
    background-color: #e7e7e7;
}

@media (min-width: 768px) {
    .hide-mobile {
        display: none;
    }

    .dropdown {
        display: none;
    }
}

@media (max-width: 768px) {
    .pc {
        display: none;
    }
}
</style>
