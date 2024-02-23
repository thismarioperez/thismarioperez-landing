"use client";

// lib
import { Canvas } from "@react-three/fiber";
import {
    Bounds,
    Center,
    Float,
    PresentationControls,
    Stats,
    Text3D,
} from "@react-three/drei";
import { Suspense, useState } from "react";

export default function HomeScene() {
    const debug = false;
    const [ready, setReady] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <div className="relative w-full h-full">
                <Canvas
                    onCreated={() => {
                        setReady(true);
                    }}
                >
                    {debug ? <Stats /> : null}
                    {debug ? <axesHelper args={[2]} /> : null}
                    {debug ? <gridHelper args={[20, 20]} /> : null}

                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 2, 1]} />
                    <Suspense fallback={null}>
                        <Float floatingRange={[undefined, 0.01]} speed={2}>
                            <Bounds clip observe fit>
                                <PresentationControls
                                    global
                                    snap
                                    rotation={[0.1, 0.1, 0]}
                                >
                                    <Center>
                                        <Text3D
                                            font="/fonts/PrestigeEliteStd_Bold.json"
                                            castShadow
                                            receiveShadow
                                        >
                                            M
                                            <meshPhongMaterial
                                                color={"white"}
                                            />
                                        </Text3D>
                                    </Center>
                                </PresentationControls>
                            </Bounds>
                        </Float>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
