<template>
  <div class="list-wrapper">
    <div class="list">

      <div class="list-header">
        <div contenteditable="true" class="list-header-name"> To do</div>
      </div>

      <div class="list-cards">
        <div class="list-card">
          <div class="list-card-details">
            <span class="list-card-title">
              Some card
            </span>
          </div>
        </div>
        <div class="list-card">
          <div class="list-card-details">
            <span class="list-card-title">
              Some card
            </span>
          </div>
        </div>
        <div class="list-card">
          <div class="list-card-details">
            <span class="list-card-title">
              Some card
            </span>
          </div>
        </div>
        <div class="list-card">
          <div class="list-card-details">
            <span class="list-card-title">
              Some card
            </span>
          </div>
        </div>
      </div>

      <div class="card-composer">
        <div class="list-card">
          <div class="list-card-details">
            <textarea dir="auto" style="overflow: hidden; word-wrap: break-word; resize: none; height: 54px;" class="list-card-composer-textarea"></textarea>
          </div>
        </div>

        <div class="cc-controls">
          <div class="cc-controls-section">
            <input class="primary confirm" type="submit" value="Add">
            <a class="icon-lg icon-close dark-hover js-cancel" href="#">X</a>
          </div>
        </div>
      </div>

      <a class="open-card-composer js-open-card-composer" href="#">Add a card…</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrapper{
  width: 270px;
  margin: 0 5px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}

.list {
  background: #E2E4E6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
}

.list-header {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 8px 10px;
  position: relative;
  min-height: 18px;
}

.list-cards {
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow-y: auto;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
}

.list-card {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 6px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  z-index: 0;
}

.list-card-details {
  overflow: hidden;
  padding: 6px 6px 2px 8px;
  position: relative;
  z-index: 10;
}

.list-card-title {
  clear: both;
  font-weight: 400;
  margin: 0 0 4px;
  overflow: hidden;
  word-wrap: break-word;
  color: #4d4d4d;
}

.open-card-composer {
  border-radius: 0 0 3px 3px;
  color: #8c8c8c;
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 8px 10px;
  position: relative;
  text-decoration: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
