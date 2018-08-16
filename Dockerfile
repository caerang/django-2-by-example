FROM python:3.7.0
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
RUN apt-get update && apt-get install -y gettext
ADD requirements.txt /app/
RUN pip install -r requirements.txt
ADD ./myshop /app/
