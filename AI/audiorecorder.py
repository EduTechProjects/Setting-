# pip install pyaudio -> 이부분 먼저 컴퓨터에 깔아주기
import pyaudio
import wave
import sys
import os


def device() :
  audio = pyaudio.PyAudio()

  desc = audio.get_device_info_by_index(1)
  rate = int(desc["defaultSampleRate"])
  return rate


def audio_Recording(RECORD_SECONDS = 120) :
  RATE = device()
  audio = pyaudio.PyAudio()
# 녹음시작!
  stream = audio.open(format=pyaudio.paInt16, 
                channels=1, 
                rate=RATE, 
                input=True, 
                input_device_index= 1,
                frames_per_buffer=1024)
#(format = 비트기 깊이, 16비트로 기본 설정, rate = sr값, input=음성을 입력할건지 아닌지, 여기선 맞으니까 True,input_device_index= 노트북에 따라 마이크 장치 번호 넣어줌 1이 제일 기본 마이크)

  print("recording...")

  frames = []

 

  for i in range(0, int(RATE / 1024 * RECORD_SECONDS)):
      data = stream.read(1024)
      frames.append(data)
  
  
  stream.stop_stream()
  stream.close()
  audio.terminate()

  waveFile = wave.open("audiofile.wav", 'wb')
  waveFile.setnchannels(1)
  waveFile.setsampwidth(audio.get_sample_size(pyaudio.paInt16))
  waveFile.setframerate(RATE)
  waveFile.writeframes(b''.join(frames))
  waveFile.close()
  
  return "finished recording"
  



 

