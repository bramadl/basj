"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

export const ClientSection: FC = () => {
  return (
    <section
      id="client"
      className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-12 md:gap-20 xl:gap-[72px] self-stretch py-[72px] md:py-20 xl:py-[100px] px-8 md:px-[120px] xl:px-[160px] bg-shades-gray-10"
    >
      <motion.div
        className="flex flex-col items-center gap-6 self-stretch md:max-w-[502px]"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-mobile-h4-400 md:text-desktop-h4-400">
          Our solutions are recognized by{" "}
          <strong className="text-mobile-h4-700 md:text-desktop-h4-700">
            international certification bodies.
          </strong>
        </h2>
        <p className="text-mobile-b1-400 md:text-desktop-b1-400">
          PT Berkah Agung Semesta Jaya is committed to creating positive impacts
          on people and the planet. We are certified to meet high standards of
          social and environmental performance.
        </p>
      </motion.div>
      <motion.div
        className="flex md:grid lg:flex md:grid-cols-3 items-center justify-center gap-x-14 gap-y-8 flex-wrap"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          alt="Bureau veritas"
          className="grayscale"
          src="https://s3-alpha-sig.figma.com/img/a1cc/5f2a/d7091973a679db1d3e5ea122b616a036?Expires=1692576000&Signature=CQIIY9f1P1i~Ugnd7Qlai0RXaRy0PBOv4O1CikbznDlVyIite~8kN9pKWjjHGBfuXgKyDX5qrxaHb0qLDpnNpdONzy988gcAaRHeqH6sB29VvdwviKawTdLAfmlqu3rNczzaRDxfHPq7BhMKZoj2Cip9ci5FReJPqXr4Vz4F9Kcfgt~fPDE~GCMyVrpZsa3t0aTF6Xo-wiJICKEnBlJkep7BDjppTHkWIGzU3I4elpO9-lz4eT9zKMeWgFHRfcqhHC6R8lWz7iHSXoQRZtac0Ra~4RalN7CK3QVgGLlGo1sI3Mj9f97MJS65eQ06IMw8gOCvkd~WSZGYvbEPBuAJwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={90}
          height={110}
        />
        <Image
          alt="Indonesian legal wood"
          className="grayscale"
          src="https://s3-alpha-sig.figma.com/img/056a/0d3d/8d5d3da0edb30580c5fe77246bce666e?Expires=1692576000&Signature=JJRXAyxcFpfYZwLhRUkGea1ae2GpYoN1hUF5QY2bZGtTFH-MgxFJOLNgKcWYl8bg0-u1m2sWLvVniotyG4AF6FIxlCkPICTAQESKuL9bgVcDGPeAGui98rqh7RldQzuidihYjwZHjkw7gU6O4IWkYpiio40~5m2ZRpsWlORJObtrgOYYOKld3DnO~lEZX6E2ID6L-PrhNZ7dzo74TrfKUTKMl5PQ9UaU9ljKZxvXQspMjvDuwGopgDQM7wdr6MM~tvffKZQyP2YRZUi3~CmPO0F2bgQDJ3DLrybDCcKx9PmL0NwZ2kewJpEDnJchfB1Snu36rfb0QAW-E6vwbgzagA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={146}
          height={98}
        />
        <Image
          alt="Sarbi international certification"
          className="grayscale"
          src="https://s3-alpha-sig.figma.com/img/cece/bd9a/65b8a8556d824491ce2a9f6f7b72049d?Expires=1692576000&Signature=U-SYqCIfJN5K3BhYCHPnD~ypEmf-TkacXpjPHEvFX6~dF~NqL2GWbmcQL-Iln9ZwCWEPnR4ugO3e2Y2TQjdvJElK9BBWUBHKFqvaC6Akkszkjrc0OhcOR~X3fdVZEeuPYRyH7KN1iJJgfQdIu0Vl0bTc4wI9o5Ct64RB0MLqt3Lnu3Wmx46BCgysaYkpVenhfm~T6WYf7Z1Afrz-eZ95PXetTeILqeZN770Wg9ChDkx9BJUsjy5Ef9DFTq4kGlVWh1UMpewyZ-onhCBA9aLMjXvythxH3qCz8RyxxeIPeEqRWlkDhMpcCxYqKr2xFExczONmgzanARGdbklVSA4LxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={188.67}
          height={80}
        />
      </motion.div>
    </section>
  );
};
