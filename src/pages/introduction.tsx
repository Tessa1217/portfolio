import { fadeInUp } from "../constants/animation/animation";
import MotionWrapper from "@/components/motion-wrapper";

export default function Introduction() {
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <MotionWrapper variants={fadeInUp} className="text-center px-4">
        <h1 className="text-5xl font-display font-bold mb-6 tracking-tight">
          안녕하세요, 권유진입니다
        </h1>
        <p className="text-lg max-w-3xl leading-relaxed text-white/80">
          <span>배움</span>을 멈추지 않고, <span>책임감</span> 있게 완성하는
          개발자가 되고자 합니다.
        </p>
      </MotionWrapper>
    </section>
  );
}
