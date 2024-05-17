<template>
    <el-container class="chatbot">
      <el-main class="chatbox">
        <!-- Display chat messages -->
        <div v-for="message in messages" :key="message.id" class="message">
          <el-card class="user-message" v-if="message.isUser">
            {{ message.content }}
          </el-card>
          <el-card class="bot-message" v-else>
            {{ message.content }}
          </el-card>
        </div>
      </el-main>
      <el-footer>
        <el-input
          v-model="userInput"
          @keydown.enter="sendMessage"
          placeholder="Enter your message..."
          class="input-box"
        />
        <el-button @click="sendMessage" type="primary">Send</el-button>
      </el-footer>
    </el-container>
  </template>
  
  <script lang="ts" setup name="Talk">
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  import 'element-plus/theme-chalk/el-container.css';
  import 'element-plus/theme-chalk/el-main.css';
  import 'element-plus/theme-chalk/el-footer.css';
  import 'element-plus/theme-chalk/el-input.css';
  import 'element-plus/theme-chalk/el-button.css';
  import 'element-plus/theme-chalk/el-card.css';
  
  interface MessageInterface {
    id: number;
    content: string;
    isUser: boolean;
  }
  
  const messages = reactive<MessageInterface[]>([]);
  const userInput = ref('');
  
  function sendMessage() {
    if (userInput.value !== '') {
      // Add user message to messages array
      messages.push({ id: Date.now(), content: userInput.value, isUser: true });
  
      // Call API to get chatbot's response
      getChatbotResponse(userInput.value)
        .then((response) => {
          console.log('Chatbot response:', response);
          messages.push({ id: Date.now(), content: response, isUser: false });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
      // Clear user input
      userInput.value = '';
    }
  }
  
  async function getChatbotResponse(prompt: string) {
    const apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
    const apiKey = 'AIzaSyAUB13cnCZD4_JSursselOYjIvnDM92NFs';
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: prompt }] }
        ]
      })
    };
  
    try {
      const response = await fetch(apiEndpoint + '?key=' + apiKey, requestOptions);
      if (response.ok) {
        const result = await response.json();
        const completion = result.candidates[0].content.parts[0].text;
        return completion;
      } else {
        console.error('API请求失败:', response.status);
      }
    } catch (error) {
      console.error('发生错误:', error);
    }
  }
  </script>
  
  <style scoped>
  .chatbox {
    height: 400px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .user-message {
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .bot-message {
    background-color: #4caf50;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .input-box {
    width: calc(100% - 100px);
    margin-right: 10px;
  }
  
  el-footer {
    display: flex;
    align-items: center;
  }
  
  el-button {
    flex-shrink: 0;
  }
  </style>
  