<template>
    <div class="signin">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
  name: "HomeSignin",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/css/variables.styl';

.signin>>>.ivu-btn-primary {
    background-color: $dark-ale;
    border-color: $dark-ale;
}

.ivu-input-group-append, .ivu-input-group-prepend {
    border-color: $dark-ale;
}

.signin {
    height: 300px;
    // background: rgba(69, 19, 15, 0.7);
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 80px;
    text-align: center;
    padding: 40px 15px;
}

// iphone5/SE
@media (max-width: 320px) {
    .signin {
        bottom: 20px;
    }
}

// iphone6/7/8
// @media (min-width: 375px) and (max-width: 320px) {
//     .signin {
//         bottom: 20px;
//     }
// }

</style>
