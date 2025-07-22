import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeSlideUp,
} from "../constants/animation/animation";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { SKILL_SET } from "../lib/data";
import SectionTitle from "../components/section-title";

export default function Skills() {
  const { ref, controls } = useInViewAnimation();
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <motion.div
        ref={ref}
        animate={controls}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center px-4 w-screen"
      >
        <SectionTitle title="Skill Set" />
        {Object.entries(SKILL_SET).map(([key, value]) => (
          <div className="grid grid-cols-12 mb-10" key={key}>
            <motion.div
              ref={ref}
              animate={controls}
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="col-span-5"
            >
              <p className="slide-up text-4xl leading-none text-muted-foreground uppercase font-header">
                {key}
              </p>
            </motion.div>
            <div className="col-span-7 flex gap-x-10 gap-y-10 flex-wrap">
              {value.map((skill) => (
                <motion.div
                  ref={ref}
                  animate={controls}
                  variants={fadeSlideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="slide-up flex gap-3.5 items-center leading-none"
                  key={skill.name}
                >
                  <div className="flex gap-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width="40"
                      height="40"
                      className="max-h-10"
                    />
                    <span className="text-2xl capitalize">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
