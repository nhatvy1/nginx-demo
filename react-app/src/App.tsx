import { FormProvider, useForm } from 'react-hook-form'
import InputFullName from './nested'
import RippleButton from './components/ui/Button'

function App() {
  const methods = useForm()

  const { register } = methods

  const onSubmit = (data: any) => {
    console.log('Check: ', data)
  }

  return (
    <>
      <div className='w-[350px] border p-2 mb-4'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className='w-full mb-2'>
              <label htmlFor='username' className='block text-left'>
                Username
              </label>
              <input
                id='username'
                {...register('name')}
                className='w-full outline-none border p-1'
              />
            </div>

            <div className='w-full mb-2'>
              <label htmlFor='password' className='block text-left'>
                Password
              </label>
              <input
                id='password'
                {...register('password')}
                className='w-full outline-none border p-1'
              />
            </div>

            <InputFullName />

            <RippleButton
              onClick={()=> console.log('check')}
            >
              Custom Ripple Button
            </RippleButton>
          </form>
        </FormProvider>
      </div>

      {Array.from({ length: 10000 }, (_, index)=> (
        <div className='w-[350px] h-[100px] mb-2 border'>{index}</div>
      ))}
    </>
  )
}

export default App
