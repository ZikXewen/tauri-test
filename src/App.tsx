import { notification } from '@tauri-apps/api'

const notify = () => {
  // new window.Notification('Noti Title', {
  //   body: 'Noti body',
  // })
  notification.sendNotification({
    title: 'Noti Title',
    body: 'Noti body',
  })
}
const App = () => {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-black scrollbar-thin scroll-smooth flex flex-col">
      <div
        onClick={notify}
        className="border-2 py-2 px-6 border-black rounded-full mx-auto cursor-pointer hover:bg-gray-200"
      >
        Send Noti
      </div>
    </div>
  )
}

export default App
