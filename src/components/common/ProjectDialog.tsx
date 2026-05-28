import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

type ProjectDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    submitLabel?: string;
};

export function ProjectDialog({
    open,
    onOpenChange,
    title,
    submitLabel = "Créer le projet",
}: ProjectDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>

                <form className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="project-name">Nom du projet</Label>
                        <Input
                            id="project-name"
                            placeholder="Week-end à Lisbonne"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="project-description">
                            Description{" "}
                            <span className="text-muted-foreground">
                                (optionnel)
                            </span>
                        </Label>
                        <Textarea
                            id="project-description"
                            rows={3}
                            placeholder="3 jours entre amis."
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Type</Label>
                        <Select defaultValue="travel">
                            <SelectTrigger>
                                <SelectValue placeholder="Choisir un type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="travel">Voyage</SelectItem>
                                <SelectItem value="home">Maison / Coloc</SelectItem>
                                <SelectItem value="birthday">Anniversaire</SelectItem>
                                <SelectItem value="meal">Repas / Sortie</SelectItem>
                                <SelectItem value="work">Pro / Travail</SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="project-budget">
                            Budget global{" "}
                            <span className="text-muted-foreground">
                                (optionnel)
                            </span>
                        </Label>

                        <div className="relative">
                            <Input
                                id="project-budget"
                                type="number"
                                placeholder="1000"
                                className="pr-8"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                €
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Switch id="project-alert" />
                            <Label htmlFor="project-alert">
                                Activer un seuil d’alerte
                            </Label>
                        </div>

                        <div className="flex items-center gap-3">
                            <Slider defaultValue={[80]} max={100} step={1} />
                            <span className="w-12 text-right text-xs font-medium tabular-nums">
                                80 %
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label>
                                Participants{" "}
                                <span className="text-muted-foreground">
                                    (optionnel)
                                </span>
                            </Label>

                            <Button type="button" variant="ghost" size="sm">
                                <Plus className="size-4" />
                                Ajouter
                            </Button>
                        </div>

                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Input placeholder="Nom du participant" />
                                <div className="relative w-32 shrink-0">
                                    <Input
                                        type="number"
                                        placeholder="Montant"
                                        className="pr-7 text-right tabular-nums"
                                    />
                                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                        €
                                    </span>
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-destructive"
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Annuler
                        </Button>

                        <Button type="submit">{submitLabel}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}