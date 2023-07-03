# AI

## 모듈 설명
모듈 이름|기능|
---|---|
audiorecorder.py| 목소리 녹음 모듈|

### [audiorecorder.py](https://github.com/EduTechProjects/AI/blob/junghyewon/audiorecording/audiorecorder.py)
: 노트북 마이크 오픈 후 사용자의 목소리를 녹음하여 .wav파일로 반환해줍니다. 내부 함수는 다음과 같습니다.

*audio_Recording(RECORD_SECONDS = 120)
  - 디폴트 마이크는 1번째 마이크입니다.(보통 노트북에서 제일 기본으로 사용하는 노트북 내장 마이크)
  - RATE는 sr을 의미하는데 이는 노트북마다 다릅니다. 안에 device()라는 함수로 1번째 마이크의 RATE를 자동으로 반환하게 구현했습니다.
  - 저장되는 파일명은 "audiofile.wav"입니다. 추후 librosa로 오디오를 변경하거나 wav2vec에 받아올 때 이 이름으로 받아오시면 됩니다.
```
#사용예시
pip install pyaudio
import audiorecorder as ar
ar.audio_Recording()
```
## wav2vec finetuning model test

#### 1. korean_en_model_960h.ipynb 
: wav2vec_base_960h_finetune model을 한국인의 영어 발화 데이터로 한번 더 파인튜닝하고 허깅페이스에 업로드한 코드
#### 2. model_test_0607.ipynb
: 위에서 학습된 모델을 불러와 샘플 음성 데이터 3종의 인식결과를 보여주는 코드
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1eWZ-0BWQ9fBl5MZlmA_XWDgoiDGXNt3F?authuser=2#scrollTo=GeDLkgVyk_an&line=1&uniqifier=1) (별도 세팅 없이 바로 실행 가능)  
<br>**최종 모듈에 탑재하기 위한 모델을 사전학습하는 과정**

앞서 wav2vec-base_no_finetune 모델을 동일 데이터셋으로 파인튜닝 한 모델 대비 성능 개선   
> (기존)butw what if somebody dewcides to brak it ecarful that youkeepw atat curverigww but louk for wplacs to save mony maybew itw's wtakwing longerto get thing wswcward away than 

>(개선)but what ive somebody decides to breake it  careful that you keep atequate coverage but look for places to save money maybe it's taking longer to get things s quared away than

[데이터 출처](https://aiopen.etri.re.kr/voiceModel)  
:5000개(50명*100발화)  