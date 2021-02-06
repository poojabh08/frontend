import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'I am the life of the party?',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:1 },
        { answerText: 'Moderately Agree',  value:1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:-1, id:1 },
        { answerText: 'Strongly Disagree', value:-2, id:1 },
      ],
    },
    {
      questionText: 'I dont talk a lot',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:1 },
        { answerText: 'Moderately Agree',  value:-1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:1, id:1 },
        { answerText: 'Strongly Disagree', value:2, id:1 },
      ],
    },
    {
      questionText: 'I Feel comfortable around people.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:1 },
        { answerText: 'Moderately Agree',  value:1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:-1, id:1  },
        { answerText: 'Strongly Disagree', value:-2, id:1 },
      ],
    },
    {
      questionText: 'I keep in the background.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:1 },
        { answerText: 'Moderately Agree',  value:-1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:1, id:1  },
        { answerText: 'Strongly Disagree', value:2, id:1 },
      ],
    },
    {
      questionText: 'I start conversations.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:1 },
        { answerText: 'Moderately Agree',  value:1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:-1, id:1  },
        { answerText: 'Strongly Disagree', value:-2, id:1 },
      ],
    },
    {
      questionText: 'I have little to say.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:1 },
        { answerText: 'Moderately Agree',  value:-1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:1, id:1  },
        { answerText: 'Strongly Disagree', value:2, id:1 },
      ],
    },
    {
      questionText: 'I talk to a lot of different people at parties.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:1 },
        { answerText: 'Moderately Agree',  value:1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:-1, id:1  },
        { answerText: 'Strongly Disagree', value:-2, id:1 },
      ],
    },
    {
      questionText: 'I dont like to draw attention to myself.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:1 },
        { answerText: 'Moderately Agree',  value:1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:-1, id:1  },
        { answerText: 'Strongly Disagree', value:-2, id:1 },
      ],
    },
    {
      questionText: 'I dont mind being the centre of attention.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:1 },
        { answerText: 'Moderately Agree',  value:1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:-1, id:1  },
        { answerText: 'Strongly Disagree', value:-2, id:1 },
      ],
    },
    {
      questionText: 'I am quiet around strangers.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:1 },
        { answerText: 'Moderately Agree',  value:-1, id:1 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:1 },
        { answerText: 'Moderately Disagree',  value:1, id:1  },
        { answerText: 'Strongly Disagree', value:2, id:1 },
      ],
    },
    {
      questionText: 'I get stressed out easily.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I am relaxed most of the time.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:2 },
        { answerText: 'Moderately Agree',  value:1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:-1, id:2  },
        { answerText: 'Strongly Disagree', value:-2, id:2 },
      ],
    },
    {
      questionText: 'I worry about things.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:2 },
        { answerText: 'Moderately Agree',  value:1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:-1, id:2  },
        { answerText: 'Strongly Disagree', value:-2, id:2 },
      ],
    },
    {
      questionText: 'I seldom feel blue.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:2 },
        { answerText: 'Moderately Agree',  value:1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:-1, id:2  },
        { answerText: 'Strongly Disagree', value:-2, id:2 },
      ],
    },
    {
      questionText: 'I am easily disturbed.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I get upset easily.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I change my mood a lot.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I have frequent mood swings.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I get irritated easily.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I often feel blue.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:2 },
        { answerText: 'Moderately Agree',  value:-1, id:2 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:2 },
        { answerText: 'Moderately Disagree',  value:1, id:2  },
        { answerText: 'Strongly Disagree', value:2, id:2 },
      ],
    },
    {
      questionText: 'I feel very little concern for others.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:3 },
        { answerText: 'Moderately Agree',  value:-1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:1, id:3  },
        { answerText: 'Strongly Disagree', value:2, id:3 },
      ],
    },
    {
      questionText: 'I am interested in people.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:3 },
        { answerText: 'Moderately Agree',  value:1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:-1, id:3  },
        { answerText: 'Strongly Disagree', value:-2, id:3 },
      ],
    },
    {
      questionText: 'I insult people.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:3 },
        { answerText: 'Moderately Agree',  value:-1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:1, id:3 },
        { answerText: 'Strongly Disagree', value:2, id:3 },
      ],
    },
    {
      questionText: 'I sympathize with others feelings.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:3 },
        { answerText: 'Moderately Agree',  value:1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:-1, id:3  },
        { answerText: 'Strongly Disagree', value:-2, id:3 },
      ],
    },
    {
      questionText: 'I am not interested in others problems.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:3 },
        { answerText: 'Moderately Agree',  value:-1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:1, id:3 },
        { answerText: 'Strongly Disagree', value:2, id:3 },
      ],
    },
    {
      questionText: 'I have a soft heart.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:3 },
        { answerText: 'Moderately Agree',  value:1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:-1, id:3  },
        { answerText: 'Strongly Disagree', value:-2, id:3 },
      ],
    },
    {
      questionText: 'I am not really interested in others.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:3 },
        { answerText: 'Moderately Agree',  value:-1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:1, id:3  },
        { answerText: 'Strongly Disagree', value:2, id:3 },
      ],
    },
    {
      questionText: 'I take time out for others.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:3 },
        { answerText: 'Moderately Agree',  value:1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:-1, id:3  },
        { answerText: 'Strongly Disagree', value:-2, id:3 },
      ],
    },
    {
      questionText: 'I feel others emotions.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:3 },
        { answerText: 'Moderately Agree',  value:1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:-1, id:3  },
        { answerText: 'Strongly Disagree', value:-2, id:3 },
      ],
    },
    {
      questionText: 'I make people feel at ease.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:3 },
        { answerText: 'Moderately Agree',  value:1, id:3 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:3 },
        { answerText: 'Moderately Disagree',  value:-1, id:3  },
        { answerText: 'Strongly Disagree', value:-2, id:3 },
      ],
    },
    {
      questionText: 'I am always prepared.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:4 },
        { answerText: 'Moderately Agree',  value:1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:-1, id:4  },
        { answerText: 'Strongly Disagree', value:-2, id:4 },
      ],
    },
    {
      questionText: 'I leave my belongings around.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:4 },
        { answerText: 'Moderately Agree',  value:-1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:1, id:4  },
        { answerText: 'Strongly Disagree', value:2, id:4 },
      ],
    },
    {
      questionText: 'I pay attention to details.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:4 },
        { answerText: 'Moderately Agree',  value:1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:-1, id:4  },
        { answerText: 'Strongly Disagree', value:-2, id:4 },
      ],
    },
    {
      questionText: 'I make a mess of things.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:4 },
        { answerText: 'Moderately Agree',  value:-1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:1 , id:4 },
        { answerText: 'Strongly Disagree', value:2, id:4 },
      ],
    },
    {
      questionText: 'I get chores done right away.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:4 },
        { answerText: 'Moderately Agree',  value:1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:-1, id:4  },
        { answerText: 'Strongly Disagree', value:-2, id:4 },
      ],
    },
    {
      questionText: 'I often forget tp put things back in their place.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:4 },
        { answerText: 'Moderately Agree',  value:-1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:1, id:4  },
        { answerText: 'Strongly Disagree', value:2, id:4 },
      ],
    },
    {
      questionText: 'I like to order people.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:4 },
        { answerText: 'Moderately Agree',  value:-1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:1, id:4  },
        { answerText: 'Strongly Disagree', value:2, id:4 },
      ],
    },
    {
      questionText: 'I shirk(neglect) my duties.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:4 },
        { answerText: 'Moderately Agree',  value:-1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:1, id:4  },
        { answerText: 'Strongly Disagree', value:2, id:4 },
      ],
    },
    {
      questionText: 'I follow a schedule.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:4 },
        { answerText: 'Moderately Agree',  value:1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:-1, id:4  },
        { answerText: 'Strongly Disagree', value:-2, id:4 },
      ],
    },
    {
      questionText: 'I am exacting in my work.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:4 },
        { answerText: 'Moderately Agree',  value:1, id:4 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:4 },
        { answerText: 'Moderately Disagree',  value:-1, id:4  },
        { answerText: 'Strongly Disagree', value:-2, id:4 },
      ],
    },
    {
      questionText: 'I have a rich vocabulary.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5  },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
    {
      questionText: 'I have difficulty in understanding abstract ideas.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:5 },
        { answerText: 'Moderately Agree',  value:-1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:1, id:5  },
        { answerText: 'Strongly Disagree', value:2, id:5 },
      ],
    },
    {
      questionText: 'I have a vivid imagination.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5  },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
    {
      questionText: 'I am not interested in abstract.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:5 },
        { answerText: 'Moderately Agree',  value:-1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:1, id:5  },
        { answerText: 'Strongly Disagree', value:2, id:5 },
      ],
    },
    {
      questionText: 'I have excellent ideas.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5  },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
    {
      questionText: 'I do not have a good imagination.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:-2, id:5 },
        { answerText: 'Moderately Agree',  value:-1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:1, id:5  },
        { answerText: 'Strongly Disagree', value:2, id:5 },
      ],
    },
    {
      questionText: 'I am quick to understand things.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5  },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
    {
      questionText: 'I use difficult words.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5 },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
    {
      questionText: 'I spend time reflecting on things.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5  },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
    {
      questionText: 'I am full of ideas.',
      answerOptions: [
        { answerText: 'Strongly Agree', value:2, id:5 },
        { answerText: 'Moderately Agree',  value:1, id:5 },
        { answerText: 'Neither Agree nor Disagree',  value:0, id:5 },
        { answerText: 'Moderately Disagree',  value:-1, id:5  },
        { answerText: 'Strongly Disagree', value:-2, id:5 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);


  const handleAnswerOptionClick = (value,id) => {
    if (id==1){
      setScore1(value + score1);
    }
    else if(id == 2){
      setScore2(value+score2);
    }
    else if(id == 3){
      setScore3(value+score3);
    }
    else if(id == 4){
      setScore4(value+score4);
    }
    else if(id == 5){
      setScore5(value+score5);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
        <div>
          You scored {score1} for extroversion
          </div>
          <div>
          You scored {score2} for neuroticism
          </div><div>
          You scored {score3} for agreeableness
          </div>
          <div>
          You scored {score4} for conscientiousness
          </div>
          <div>
          You scored {score5} for Openness to experience
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.value, answerOption.id)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}