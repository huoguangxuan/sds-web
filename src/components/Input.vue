<template>
  <div class="myinput flexcc">
    <img v-if="leftIcon" class="myinput_prefix" :src="iconUrl" alt="" />
    <input
      :type="eyeStatus ? 'text' : type"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :value="val"
      :placeholder="placeholder"
    />
    <img
      v-show="clearable && isFocus"
      @click="clear"
      :style="{ right: leftIcon == 'pwd' ? '30px' : '0px' }"
      @mousedown.prevent
      class="myinput_suffix"
      src="@/assets/img/icon_delete.png"
      alt=""
    />
    <img
      v-show="leftIcon == 'pwd'"
      @mousedown.prevent
      @click="() => (eyeStatus = !eyeStatus)"
      class="myinput_suffix"
      :src="eye"
      alt=""
    />
    <slot name="sms"></slot>
  </div>
</template>
<script>
import { Icon } from "woui-mobile";
export default {
  data() {
    return {
      isFocus: false,
      eyeStatus: false
    };
  },
  components: {
    [Icon.name]: Icon
  },
  props: {
    type: {
      type: String,
      default: "text"
    },
    val: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "placeholder"
    },
    leftIcon: {
      type: String,
      default: "123"
    },
    rightIcon: {
      type: String,
      default: "123"
    }
  },
  methods: {
    clear() {
      this.$emit("update:val", "");
      this.$emit("input", "");
      this.$emit("change", "");
    },
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur() {
      this.isFocus = false;
    },
    handleInput(event) {
      this.$emit("update:val", event.target.value);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    }
  },
  computed: {
    iconUrl: function() {
      if (this.leftIcon) {
        return require(`@/assets/img/icon_${this.leftIcon}${
          this.isFocus ? "" : "_df"
        }.png`);
      }
      return "";
    },
    eye: function() {
      if (this.leftIcon && this.leftIcon == "pwd") {
        return require(`@/assets/img/icon_eye${
          this.eyeStatus ? "_open" : "_close"
        }.png`);
      }
      return "";
    }
  }
};
</script>
<style lang="less" scoped>
.font22 {
  font-size: 22px;
}
/deep/ .wo-button {
  height: 46px;
  padding: 0px 13px;
  border-radius: 5px;
  border: 2px solid #ff7300;
}
.myinput {
  width: 100%;
  display: flex;
  position: relative;
  input {
    text-indent: 40px;
    border-bottom: 2px solid #ccc;
    line-height: 75px;
    font-size: 24px;
    color: #333;
    width: 100%;
  }
  &_prefix {
    position: absolute;
    left: 0;
  }
  &_suffix {
    position: absolute;
    right: 0;
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
    border-bottom: 2px solid #ff7300;
  }
  /deep/ input::-webkit-input-placeholder {
    color: #999;
    font-size: 22px;
  }
}
</style>
