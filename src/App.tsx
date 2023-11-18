import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/home/Home'
import Login from './views/login/Login'
import Student from './views/student-profil/StudentProfil'
import Teacher from './views/teacher-profile/TeacherProfile'
import Attendance from './views/attendance/Attendance'
import Absent from './views/absent/Absent'
import Camera from './views/camera/Camera'
import Result from './views/result-camera/ResultCamera'
import Location from './views/verification-location/VerificationLocation'
import Monthly from './views/student-report/StudentReport'
import Daily from './views/detail-report-student/DetailReportStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Home />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      <Login />
      </div>
      <div>
      <Student />
      </div>
      <div>
      <Teacher />
      </div>
      <div>
      <Attendance />
      </div>
      <div>
      <Absent />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
