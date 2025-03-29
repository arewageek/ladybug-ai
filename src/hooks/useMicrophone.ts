"use client";

import { useState } from "react";

export const useMicrophone = () => {
  const [audioPermission, setAudioPermission] = useState(false);

  const toggleAudioPermssions = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: !audioPermission })
      .then(() => setAudioPermission(true))
      .catch(() => setAudioPermission(false));
  };

  const enableAudio = () => {
    if (!audioPermission) toggleAudioPermssions();
  };

  return { audioPermission, toggleAudioPermssions, enableAudio };
};
