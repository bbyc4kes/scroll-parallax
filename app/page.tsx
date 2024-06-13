'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion'

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
]

export default function Home() {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.8])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <main>
      <div className="h-[100vh]"></div>
      <div
        ref={gallery}
        className="h-[175vh] bg-slate-900 relative overflow-hidden gap-[2vw] p-[2vw] flex"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="h-[100vh]"></div>
    </main>
  )
}

const Column = ({
  images,
  y,
}: {
  images: string[]
  y: MotionValue<number>
}) => {
  return (
    <motion.div
      className="relative h-full w-full min-w-[250px] flex flex-col gap-[2vw] odd:top-[-45%] even:top-[-75%] last-of-type:top-[-95%]"
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className="h-full w-full relative border-[1vw] overflow-hidden"
          >
            <Image
              src={`/images/${src}`}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        )
      })}
    </motion.div>
  )
}
