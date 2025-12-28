# Smart Home System (MQTT, MySQL, Android Control)

A smart home prototype integrating an MQTT broker, a MySQL database on a Raspberry Pi, and an Android app for control and monitoring. The system supports door access via RFID, room lighting control, gas leak/fire detection with alarms and automated calls, environmental monitoring (temperature & humidity), and activity logging.

## Hardware
- Arduino Mega 2560  
- RFID RC522  
- Servo SG-90 (door actuator)  
- GSM module SIM800L V2 (5 V)  
- Real-Time Clock (RTC) DS3231  
- ESP8266 (ESP-01) — Wi‑Fi module  
- Gas sensor MQ-2  
- DHT11 (temperature & humidity sensor)  
- LEDs (room lighting)  
- Buzzer (alarm)  
- Raspberry Pi (MQTT broker & MySQL server)  
- 5 V 6 A power supply

## Skills / Technologies
- C++ (Arduino)  
- Python  
- Java (Android Studio)  
- MySQL  
- MQTT, Raspberry Pi, GSM/SMS/voice integration

## System Overview
The Arduino-based nodes connect to the Raspberry Pi MQTT broker via an ESP8266 module. Sensor readings and device events are published/subscribed over MQTT. The Raspberry Pi stores data in a MySQL database and can send notifications (email) or trigger GSM calls when critical events occur. An Android app provides remote control and displays live and historical data.

## Features

### Door control
- Door open/close controlled by an SG-90 servo.
- RFID cards (RC522) can open the door.
- The Android app also supports remote door open/close commands.

### Lighting control
- Each room has LEDs that act as lights.
- Lights are toggled from the Android app; changes are sent via MQTT and logged to the server.

### Gas detection and alarm
- MQ-2 sensor monitors for gas leaks and potential fire.
- If a dangerous level is detected:
  - A buzzer sounds locally.
  - The system triggers an automated GSM voice call (SIM800L) to notify predetermined contacts.
  - An email alert is sent from the Raspberry Pi with the detection time (from the RTC).

### Temperature & humidity monitoring
- DHT11 sensors in rooms measure temperature and humidity.
- Readings are pushed to the server and shown in the Android app as numeric values and time-series graphs.
- Data is stored in MySQL for historical analysis.

### Data logging
- Temperature/humidity readings are logged with timestamps.
- All user actions and automated events (e.g., light on/off, door open/close, gas alarm) are recorded in an activity log with timestamps.
- Logs can be viewed from the Android app or a web interface.

## Connectivity & Server
- Arduino → ESP8266 → MQTT Broker (Raspberry Pi).
- Raspberry Pi runs:
  - MQTT broker (e.g., Mosquitto)
  - MySQL database for sensor and activity logs
  - Email alert service and integration with RTC for accurate timestamps
  - Optional scripts to trigger GSM actions via SIM800L when required

## Example Screenshots & Diagrams
![Android controller screenshot](/pproject-md/smarthome/image1.png)  
_Smart Home Android app: device control interface_

![Temp & Humidity graph](/pproject-md/smarthome/image2.png)  
_Temperature and humidity graph in the Android app_

![Temperature log](/pproject-md/smarthome/image3.jpeg)  
_Example temperature/humidity log entries stored on the server_

![Activity log](/pproject-md/smarthome/image4.jpeg)  
_Action/activity log showing device events and timestamps_

![System block diagram](/pproject-md/smarthome/image5.jpeg)  
_Block diagram of the smart home system_

![Circuit diagram](/pproject-md/smarthome/image6.jpeg)  
_Circuit diagram for the prototype_