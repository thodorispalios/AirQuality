<template>
    <label class="container" >
        <input type="checkbox" id="toggle_button"  v-model="checkedValue">
        <span class="switch" ></span>
    </label>
</template>
<script>
export default {
    props: {
        defaultState: {
            type: Boolean, 
            default: false
        }
    },
    data() {
        return {
            currentState: false
        }
    },

    computed: {
        isActive() {
            return this.currentState;
        },

        checkedValue: {
            get() {
                return this.defaultState
            },
            set(newValue) {
              this.currentState = newValue;
              this.$emit('change', newValue);
            }
        }
    }
}
</script>

<style lang="scss">
.container {
  cursor: pointer;
  display: flex;
  align-items: center;
}

input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.label {
  margin-left: 12px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.switch {
  --switch-container-width: 50px;
  --switch-size: calc(var(--switch-container-width) / 2);
  --light-gray: #e2e8f0;
  --gray: #cbd5e0;
  --dark-gray: #a0aec0;
  --teal: #4fd1c5;
  --dark-teal: #319795;
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  border-radius: var(--switch-size);
}
.switch::before {
  content: "";
  position: absolute;
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  border-radius: 9999px;
  background-color: rgb(67, 67, 68);
  border: 2px solid var(--light-gray);
  transition: transform 0.375s ease-in-out;
}
input:checked + .switch {
  background-color: var(--teal);
}
input:checked + .switch::before {
  border-color: var(--teal);
  transform: translateX(
    calc(var(--switch-container-width) - var(--switch-size))
  );
}
input:focus + .switch::before {
  border-color: var(--gray);
}
input:focus:checked + .switch::before {
  border-color: var(--dark-teal);
}
</style>