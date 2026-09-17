import {
  Stethoscope,
  Sparkles,
  AlignCenter,
  Anchor,
  Activity,
  Baby,
  Gem,
  Siren,
  HelpCircle,
} from "lucide-react";

const map = {
  Stethoscope,
  Sparkles,
  AlignCenter,
  Anchor,
  Activity,
  Baby,
  Gem,
  Siren,
};

export default function IconResolver({ name, className = "w-6 h-6" }) {
  const Cmp = map[name] || HelpCircle;
  return <Cmp className={className} strokeWidth={1.75} aria-hidden="true" />;
}
