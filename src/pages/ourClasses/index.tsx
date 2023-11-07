import { SelectedPage, ClassType } from "@/components/types";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import { classes } from "./classesData";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <article className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              omnis, nihil blanditiis hic laboriosam possimus consequuntur nam
              repellat, rerum eius suscipit nemo, asperiores dolor officiis
              beatae. Enim labore sapiente dolores.
            </p>
          </article>
        </motion.div>
        <section className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </section>
      </motion.div>
    </section>
  );
};

export default OurClasses;
