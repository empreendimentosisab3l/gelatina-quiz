import { useState, useCallback, useEffect } from 'react'
import './index.css'

import QuizLayout from './components/QuizLayout'
import LandingPage from './components/steps/LandingPage'
import IntroStep from './components/steps/IntroStep'
import AgeStep from './components/steps/AgeStep'
import BodyTypeStep from './components/steps/BodyTypeStep'
import BodyAreasStep from './components/steps/BodyAreasStep'
import SocialProofStep from './components/steps/SocialProofStep'
import NameStep from './components/steps/NameStep'
import WeightImpactStep from './components/steps/WeightImpactStep'
import AppearanceStep from './components/steps/AppearanceStep'
import BarriersStep from './components/steps/BarriersStep'
import MethodExplanationStep from './components/steps/MethodExplanationStep'
import GoalsStep from './components/steps/GoalsStep'
import WeightStep from './components/steps/WeightStep'
import HeightStep from './components/steps/HeightStep'
import DesiredWeightStep from './components/steps/DesiredWeightStep'
import PregnanciesStep from './components/steps/PregnanciesStep'
import DailyRoutineStep from './components/steps/DailyRoutineStep'
import SleepStep from './components/steps/SleepStep'
import WaterStep from './components/steps/WaterStep'
import BmiResultsStep from './components/steps/BmiResultsStep'
import HowToUseStep from './components/steps/HowToUseStep'
import CommitmentStep from './components/steps/CommitmentStep'
import LoadingStep from './components/steps/LoadingStep'
import VideoStep from './components/steps/VideoStep'
import DreamBodyStep from './components/steps/DreamBodyStep'
import FinalCtaStep from './components/steps/FinalCtaStep'
import TransformationStoriesStep from './components/steps/TransformationStoriesStep'
import VerificationStep from './components/steps/VerificationStep'
import SecondLoadingStep from './components/steps/SecondLoadingStep'
import VslProtocolStep from './components/steps/VslProtocolStep'
import SalesPage from './components/steps/SalesPage'

const TOTAL_STEPS = 30
const STORAGE_KEY_STEP = 'gelatina_quiz_step'
const STORAGE_KEY_DATA = 'gelatina_quiz_data'

const DEFAULT_DATA = {
  name: '',
  age: '',
  bodyType: '',
  bodyAreas: [],
  appearance: '',
  weightImpact: '',
  barriers: [],
  goals: [],
  weight: 75,
  height: 165,
  desiredWeight: 65,
  pregnancies: '',
  routine: [],
  sleep: '',
  water: '',
  dreamBody: '',
}

function loadSavedState() {
  try {
    const savedStep = localStorage.getItem(STORAGE_KEY_STEP)
    const savedData = localStorage.getItem(STORAGE_KEY_DATA)
    return {
      step: savedStep ? parseInt(savedStep, 10) : 0,
      data: savedData ? { ...DEFAULT_DATA, ...JSON.parse(savedData) } : DEFAULT_DATA,
    }
  } catch {
    return { step: 0, data: DEFAULT_DATA }
  }
}

function App() {
  const saved = loadSavedState()
  const [step, setStep] = useState(saved.step)
  const [data, setData] = useState(saved.data)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STEP, String(step))
  }, [step])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data))
  }, [data])

  const goNext = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const goBack = useCallback(() => {
    setStep((prev) => {
      if (prev <= 0) return 0
      // Skip loading/auto-advance steps when going back
      const skipSteps = [22, 27, 28, 29] // loading steps + vsl protocol
      let target = prev - 1
      while (skipSteps.includes(target) && target > 0) {
        target--
      }
      return target
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }, [])

  // Step 0: Landing page (no quiz layout)
  if (step === 0) {
    return <LandingPage onNext={goNext} />
  }

  // Step 30: Sales page (no quiz layout)
  if (step === 30) {
    return <SalesPage data={data} />
  }

  // Steps 1-29: Quiz layout with progress bar
  const renderStep = () => {
    switch (step) {
      case 1:
        return <IntroStep onNext={goNext} />
      case 2:
        return <AgeStep onNext={goNext} onChange={handleChange} />
      case 3:
        return <BodyTypeStep onNext={goNext} onChange={handleChange} />
      case 4:
        return <BodyAreasStep onNext={goNext} onChange={handleChange} />
      case 5:
        return <SocialProofStep onNext={goNext} />
      case 6:
        return <NameStep onNext={goNext} onChange={handleChange} value={data.name} />
      case 7:
        return <WeightImpactStep onNext={goNext} onChange={handleChange} name={data.name} />
      case 8:
        return <AppearanceStep onNext={goNext} onChange={handleChange} />
      case 9:
        return <BarriersStep onNext={goNext} onChange={handleChange} />
      case 10:
        return <MethodExplanationStep onNext={goNext} name={data.name} />
      case 11:
        return <GoalsStep onNext={goNext} onChange={handleChange} />
      case 12:
        return <WeightStep onNext={goNext} onChange={handleChange} value={data.weight} />
      case 13:
        return <HeightStep onNext={goNext} onChange={handleChange} value={data.height} />
      case 14:
        return <DesiredWeightStep onNext={goNext} onChange={handleChange} currentWeight={data.weight} />
      case 15:
        return <PregnanciesStep onNext={goNext} onChange={handleChange} />
      case 16:
        return <DailyRoutineStep onNext={goNext} onChange={handleChange} />
      case 17:
        return <SleepStep onNext={goNext} onChange={handleChange} />
      case 18:
        return <WaterStep onNext={goNext} onChange={handleChange} />
      case 19:
        return <BmiResultsStep onNext={goNext} data={data} />
      case 20:
        return <HowToUseStep onNext={goNext} />
      case 21:
        return <CommitmentStep onNext={goNext} />
      case 22:
        return <LoadingStep onNext={goNext} />
      case 23:
        return <VideoStep onNext={goNext} />
      case 24:
        return <DreamBodyStep onNext={goNext} onChange={handleChange} />
      case 25:
        return <FinalCtaStep onNext={goNext} data={data} />
      case 26:
        return <TransformationStoriesStep onNext={goNext} />
      case 27:
        return <VerificationStep onNext={goNext} />
      case 28:
        return <SecondLoadingStep onNext={goNext} />
      case 29:
        return <VslProtocolStep onNext={goNext} name={data.name} />
      default:
        return null
    }
  }

  return (
    <QuizLayout step={step} totalSteps={TOTAL_STEPS} onBack={goBack}>
      {renderStep()}
    </QuizLayout>
  )
}

export default App
