---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VR小杰的"
  text: "技术文档中心"
  tagline: 记录开发过程
  actions:
    - theme: brand
      text: 📁查看文档
      link: /menu
    - theme: alt
      text: 🔗个人博客
      link: https://blog.vrxiaojie.top
  image:
    src: /logo.png


features:
  - title: IoT桌面环境监测仪
    details: 物联网桌面环境监测仪，主控ESP32S3，可用监测温度、湿度、CO2、VOC指数。可通过WIFI传输数据到手机及云端
    link: /iot_env_monitor_guide/项目简介
  - title: STM32 FreeRTOS学习笔记
    details: 使用立创天空星STM32F407开发板，基于HAL库的STM32 FreeRTOS开发学习笔记
    link: /STM32_FreeRTOS/
  - title: 基于CW32的物联网电压电流表
    details: 使用CW32F030C8T6做主控，ESP8266+MQTT协议联网上传数据的电压电流表
    link: /CW32-volt-ammeter/
  - title: 瑞萨RA4E2开发板
    details: 配置瑞萨MCU开发环境,学习使用瑞萨MCU的UART、I2C、SPI等
    link: /RA4E2-Develop-Board/
  - title: 瑞萨RA2L1开发板
    details: 基于RA2L1开发板做一个桌面时钟温湿度计摆件的项目
    link: /RA4L1-Develop-Board/
  - title: 瑞萨RA4L1开发板
    details: 基于RA4L1开发板做一个电压表，使用FreeRTOS实时操作系统
    link: /RA4L1-Develop-Board/
  - title: 香橙派5部署Deepseek-R1-1.5B蒸馏模型
    link: /Deepseek-R1-RK3588-OrangePi5/
    details: 基于RKLLM，在RK3588S上部署Deepseek-R1 1.5B的蒸馏模型

---

