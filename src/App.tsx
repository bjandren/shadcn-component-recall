import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type { FormEvent, KeyboardEvent, MouseEvent, ReactNode } from "react"
import {
  AlertCircleIcon,
  ArrowRightIcon,
  BellIcon,
  BoldIcon,
  BrainIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  CommandIcon,
  EyeIcon,
  InfoIcon,
  ItalicIcon,
  LightbulbIcon,
  MoreHorizontalIcon,
  PanelLeftIcon,
  RefreshCcwIcon,
  SearchIcon,
  SparklesIcon,
  TerminalIcon,
  UnderlineIcon,
  XCircleIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { DirectionProvider } from "@/components/ui/direction"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const DAY = 24 * 60 * 60 * 1000
const MISS_RETRY_REVIEWS = 5
const STORAGE_KEY = "shadcn-component-recall-v1"

type Grade = "again" | "hard" | "good" | "easy"
type ReviewMode = "due" | "weak" | "all"

type StudyCard = {
  id: string
  answer: string
  aliases: string[]
  category: string
  clue: string
  usage: string
  preview: ReactNode
}

type ReviewRecord = {
  dueAt: number
  intervalDays: number
  ease: number
  reps: number
  lapses: number
  seen: number
  correct: number
  incorrect: number
}

type ProgressState = Record<string, ReviewRecord>

type AttemptResult = {
  guess: string
  correct: boolean
}

type SessionStats = {
  reviewed: number
  correct: number
}

type SessionAnswer = "correct" | "incorrect"

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function pluralizePhrase(value: string) {
  const words = value.split(/\s+/)
  const last = words[words.length - 1]
  const lowerLast = last.toLowerCase()
  let pluralLast = `${last}s`

  if (/(s|x|z|ch|sh)$/i.test(last)) {
    pluralLast = `${last}es`
  } else if (/[bcdfghjklmnpqrstvwxyz]y$/i.test(last)) {
    pluralLast = `${last.slice(0, -1)}ies`
  } else if (lowerLast === "progress") {
    pluralLast = last
  }

  return [...words.slice(0, -1), pluralLast].join(" ")
}

function definitionPrompt(card: StudyCard) {
  const usage = card.usage.replace(/^Usage:\s*/i, "")
  const variants = Array.from(new Set([card.answer, pluralizePhrase(card.answer)]))
  const componentNamePattern = new RegExp(`\\b(?:${variants.map(escapeRegExp).join("|")})\\b`, "gi")

  return usage.replace(componentNamePattern, "_____")
}

const MEMORY_RULES: Record<string, string> = {
  accordion: "Hear the squeeze-fold idea: stacked panels expand and collapse like folded sections.",
  alert: "Traffic-cone message: important status lives inline next to the task.",
  "alert-dialog": "Stop-sign modal: pause the flow before a risky or destructive action.",
  "aspect-ratio": "Picture-frame rule: lock width and height together so media keeps its shape.",
  avatar: "Face slot: image first, initials fallback when the picture is missing.",
  badge: "Tiny status sticker: one compact label for state, count, or metadata.",
  breadcrumb: "Trail rule: show the path back up the hierarchy.",
  button: "Do-it-now rule: if clicking performs an action, think command control.",
  "button-group": "Same-family actions sit shoulder to shoulder in one joined control.",
  calendar: "Month map: visible date grid for choosing or scanning days.",
  card: "One-idea tray: header, content, and action travel together.",
  carousel: "Slide reel: move sideways through a small sequence of panels.",
  chart: "Data picture: show shape, trend, and comparison faster than raw rows.",
  checkbox: "Checklist square: each choice can be on or off independently.",
  collapsible: "Fold one note: a single section opens and closes behind a trigger.",
  combobox: "Type-to-pick rule: input plus suggestions for long option lists.",
  command: "Fast launcher: search first, then jump to an action or destination.",
  "context-menu": "Right-place actions: open commands for exactly what the pointer is on.",
  "data-table": "Work grid: rows with sorting, filtering, selection, and actions.",
  "date-picker": "Date field plus mini calendar: choose one precise day without typing.",
  dialog: "Focused room: a modal task appears over the current page.",
  direction: "Layout compass: flip reading and control flow for RTL or LTR.",
  drawer: "Bottom tray: slide up a mobile-friendly task panel.",
  "dropdown-menu": "Action pocket: one button opens a short menu of commands.",
  empty: "Blank-state guide: when nothing is there, explain what can happen next.",
  field: "Form bundle: label, control, hint, and error stay attached as one unit.",
  "hover-card": "Hover preview: rich detail appears while focus stays on the page.",
  input: "One-line blank: use it for a short typed value.",
  "input-group": "Input with attachments: prefix, suffix, or inline action belongs inside.",
  "input-otp": "Code slots: one character per box for verification codes.",
  item: "Repeatable row: media, title, detail, and action line up consistently.",
  kbd: "Keycap rule: shortcuts should look like physical keyboard keys.",
  label: "Name-tag rule: text is wired to the control it names.",
  menubar: "Desktop rail: persistent top commands grouped by menu headings.",
  "native-select": "Browser picker: use the platform's own select when simple is enough.",
  "navigation-menu": "Site-map trigger: top navigation expands into grouped destinations.",
  pagination: "Page turner: numbered controls move through chunks of results.",
  popover: "Pocket panel: click a trigger and richer content floats nearby.",
  progress: "Known-distance bar: show how far a task has advanced.",
  "radio-group": "One winner rule: grouped circles where exactly one option is chosen.",
  resizable: "Adjustable split: drag the handle to rebalance panes.",
  "scroll-area": "Windowed list: only this region scrolls while the rest stays still.",
  select: "Compact picker: one chosen value from a known list.",
  separator: "Quiet divider: split related groups without adding another surface.",
  sheet: "Side workbench: slide in a panel that stays connected to the page.",
  sidebar: "App rail: persistent navigation for sections and workspaces.",
  skeleton: "Loading outline: draw the future layout before data arrives.",
  slider: "Drag a value: rough numbers are easier on a track than in a box.",
  sonner: "Toast engine cue: notifications can be fired from anywhere and render in one place.",
  spinner: "Unknown wait: use a small rotating indicator when duration is unclear.",
  switch: "Light-switch rule: a setting is either on or off and changes immediately.",
  table: "Rows and columns: structured data needs scanning and comparison.",
  tabs: "Folder divider: sibling panels share the same space.",
  textarea: "Paragraph box: multi-line typing when one line is too cramped.",
  toast: "Tiny announcement: brief status message appears and leaves.",
  toggle: "Pressed button: one compact control can stay on or off.",
  "toggle-group": "Mode strip: several pressed buttons choose formatting or view state.",
  tooltip: "Tiny hover hint: explain an icon without interrupting the flow.",
  typography: "Reading rhythm: headings, paragraphs, lists, and quotes get consistent shape.",
}

function memoryRule(card: StudyCard) {
  return MEMORY_RULES[card.id] ?? "Make one vivid hook: shape, action, then when to use it."
}

function PreviewStage({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-lg border bg-card p-5 sm:min-h-[360px] sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-recall-cyan via-recall-mint to-recall-gold" />
      <div className="flex w-full max-w-3xl items-center justify-center">
        {children}
      </div>
    </div>
  )
}

function TargetSpotlight({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        className,
        "rounded-xl border-2 border-recall-orange bg-recall-orange/12 p-3 text-recall-orange shadow-sm ring-4 ring-recall-orange/25",
        "[&_*]:border-recall-orange/55 [&_svg]:text-recall-orange",
        "[&_[data-slot=badge]]:bg-recall-orange/15 [&_[data-slot=badge]]:text-recall-orange",
        "[&_[data-slot=button]]:border-recall-orange/70 [&_[data-slot=button]]:bg-recall-orange/15 [&_[data-slot=button]]:text-recall-orange",
        "[&_[data-slot=checkbox]]:border-recall-orange [&_[data-slot=checkbox]]:data-checked:bg-recall-orange",
        "[&_[data-slot=input]]:border-recall-orange/70 [&_[data-slot=progress-indicator]]:bg-recall-orange",
        "[&_[data-slot=skeleton]]:bg-recall-orange/20 [&_[data-slot=switch]]:border-recall-orange [&_[data-slot=switch]]:data-checked:bg-recall-orange [&_[data-slot=textarea]]:border-recall-orange/70"
      )}
    >
      {children}
    </div>
  )
}

function PreviewPair({
  staticExample,
  interactiveExample,
}: {
  staticExample: ReactNode
  interactiveExample: ReactNode
}) {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <div className="flex min-h-36 flex-col gap-2 rounded-lg border bg-muted/20 p-3">
        <Badge variant="outline" className="w-fit">
          Static
        </Badge>
        <div className="flex flex-1 items-center justify-center">{staticExample}</div>
      </div>
      <div className="flex min-h-36 flex-col gap-2 rounded-lg border bg-muted/20 p-3">
        <Badge variant="outline" className="w-fit">
          Try it
        </Badge>
        <div className="flex flex-1 items-center justify-center">{interactiveExample}</div>
      </div>
    </div>
  )
}

function QuestionProgress({
  results,
  total,
}: {
  results: SessionAnswer[]
  total: number
}) {
  const safeTotal = Math.max(total, 1)

  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Question outcomes">
      {Array.from({ length: safeTotal }).map((_, index) => {
        const result = results[index]

        return (
          <Badge
            key={index}
            aria-label={`Question ${index + 1}${result ? ` ${result}` : " not answered"}`}
            className={cn(
              "size-5 rounded-[4px] border p-0",
              result === "correct" && "border-recall-mint bg-recall-mint text-recall-mint",
              result === "incorrect" && "border-recall-rose bg-recall-rose text-recall-rose",
              !result && "border-border bg-muted text-muted"
            )}
          />
        )
      })}
    </div>
  )
}

function AspectRatioPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex size-full items-end bg-gradient-to-br from-recall-cyan/20 via-recall-orange/20 to-recall-mint/20 p-4">
          <div className="text-sm font-medium">16:9 media frame</div>
        </div>
      </AspectRatio>
    </TargetSpotlight>
  )
}

function ButtonGroupPreview() {
  return (
    <TargetSpotlight>
      <ButtonGroup>
        <Button variant="outline">Day</Button>
        <Button variant="outline">Week</Button>
        <Button variant="outline">Month</Button>
        <ButtonGroupSeparator />
        <ButtonGroupText>UTC</ButtonGroupText>
      </ButtonGroup>
    </TargetSpotlight>
  )
}

function CalendarPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 8))

  return (
    <TargetSpotlight className="max-w-fit">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border p-2 [--cell-size:--spacing(7)]"
      />
    </TargetSpotlight>
  )
}

function CarouselPreview() {
  return (
    <TargetSpotlight className="w-full max-w-xs px-10">
      <Carousel>
        <CarouselContent>
          {["Overview", "Details", "Share"].map((label) => (
            <CarouselItem key={label}>
              <div className="flex h-28 items-center justify-center rounded-lg border bg-muted/30 text-sm font-medium">
                {label}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </TargetSpotlight>
  )
}

function ChartPreview() {
  const chartData = [
    { day: "Mon", reviews: 14 },
    { day: "Tue", reviews: 22 },
    { day: "Wed", reviews: 18 },
    { day: "Thu", reviews: 28 },
  ]
  const chartConfig = {
    reviews: {
      label: "Reviews",
      color: "var(--recall-orange)",
    },
  }

  return (
    <TargetSpotlight className="w-full max-w-md">
      <ChartContainer config={chartConfig} className="h-40 w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="reviews" fill="var(--color-reviews)" radius={4} />
        </BarChart>
      </ChartContainer>
    </TargetSpotlight>
  )
}

function CollapsiblePreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <Collapsible defaultOpen className="flex flex-col gap-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="justify-between">
            Release checklist
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-lg border bg-muted/30 p-3 text-sm">
          Docs, tests, and screenshots are ready.
        </CollapsibleContent>
      </Collapsible>
    </TargetSpotlight>
  )
}

function ComboboxPreview() {
  const frameworks = ["Accordion", "Popover", "Tabs", "Tooltip"]

  return (
    <TargetSpotlight className="w-64">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Search component" />
        <ComboboxContent>
          <ComboboxEmpty>No component found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </TargetSpotlight>
  )
}

function CommandPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <Command className="rounded-lg border shadow-sm">
        <CommandInput placeholder="Type a command" />
        <CommandList>
          <CommandEmpty>No command found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <SearchIcon />
              Search docs
            </CommandItem>
            <CommandItem>
              <CommandIcon />
              Open command menu
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </TargetSpotlight>
  )
}

function ContextMenuPreview() {
  return (
    <PreviewPair
      staticExample={
        <TargetSpotlight className="w-44 rounded-lg bg-popover p-1 text-sm text-popover-foreground shadow-md">
          <div className="rounded-md px-1.5 py-1">Rename row</div>
          <div className="rounded-md px-1.5 py-1">Duplicate row</div>
          <Separator className="-mx-1 my-1" />
          <div className="rounded-md px-1.5 py-1 text-destructive">Archive row</div>
        </TargetSpotlight>
      }
      interactiveExample={
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">Right-click row</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Rename row</ContextMenuItem>
            <ContextMenuItem>Duplicate row</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Archive row</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      }
    />
  )
}

function DataTablePreview() {
  return (
    <TargetSpotlight className="w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Input className="h-8 max-w-40" placeholder="Filter tasks" readOnly />
          <Button variant="outline" size="sm">
            Columns
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Task</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Badge variant="secondary">Done</Badge>
              </TableCell>
              <TableCell>Button states</TableCell>
              <TableCell className="text-right">92</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge variant="outline">Open</Badge>
              </TableCell>
              <TableCell>Popover flow</TableCell>
              <TableCell className="text-right">76</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </TargetSpotlight>
  )
}

function DatePickerPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 8))

  return (
    <TargetSpotlight>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <CalendarClockIcon data-icon="inline-start" />
            {date ? date.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "Pick date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    </TargetSpotlight>
  )
}

function DirectionPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <DirectionProvider dir="rtl">
        <div className="rounded-lg border p-4 text-right">
          <div className="font-medium">RTL layout</div>
          <div className="text-sm text-muted-foreground">Controls and reading order flow right to left.</div>
          <Button variant="outline" size="sm" className="mt-3">
            متابعة
          </Button>
        </div>
      </DirectionProvider>
    </TargetSpotlight>
  )
}

function DrawerPreview() {
  return (
    <TargetSpotlight>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Mobile filters</DrawerTitle>
            <DrawerDescription>Adjust status, owner, and date range.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </TargetSpotlight>
  )
}

function InputGroupPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="acme.design" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Save</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </TargetSpotlight>
  )
}

function InputOTPPreview() {
  const [otp, setOtp] = useState("123456")

  return (
    <TargetSpotlight>
      <InputOTP maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </TargetSpotlight>
  )
}

function ItemPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <ItemGroup>
        <Item>
          <ItemMedia>
            <Avatar>
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Design system review</ItemTitle>
            <ItemDescription>Component naming pass</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Badge variant="secondary">Today</Badge>
          </ItemActions>
        </Item>
      </ItemGroup>
    </TargetSpotlight>
  )
}

function KbdPreview() {
  return (
    <TargetSpotlight>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </TargetSpotlight>
  )
}

function NativeSelectPreview() {
  return (
    <TargetSpotlight>
      <NativeSelect defaultValue="weekly" aria-label="Digest cadence">
        <NativeSelectOption value="daily">Daily</NativeSelectOption>
        <NativeSelectOption value="weekly">Weekly</NativeSelectOption>
        <NativeSelectOption value="monthly">Monthly</NativeSelectOption>
      </NativeSelect>
    </TargetSpotlight>
  )
}

function NavigationMenuPreview() {
  return (
    <TargetSpotlight className="w-full max-w-md">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-56 gap-2 p-3">
                <NavigationMenuLink className="rounded-md p-2 text-sm hover:bg-accent">
                  Components
                </NavigationMenuLink>
                <NavigationMenuLink className="rounded-md p-2 text-sm hover:bg-accent">
                  Patterns
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="rounded-md px-3 py-2 text-sm">Blocks</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </TargetSpotlight>
  )
}

function ResizablePreview() {
  return (
    <TargetSpotlight className="w-full max-w-md">
      <ResizablePanelGroup orientation="horizontal" className="h-36 rounded-lg border">
        <ResizablePanel defaultSize={45}>
          <div className="flex h-full items-center justify-center text-sm">Sidebar</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={55}>
          <div className="flex h-full items-center justify-center text-sm">Preview</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TargetSpotlight>
  )
}

function ScrollAreaPreview() {
  return (
    <TargetSpotlight className="w-64">
      <ScrollArea className="h-36 rounded-lg border p-3">
        <div className="flex flex-col gap-2 text-sm">
          {["Accordion", "Alert", "Avatar", "Button", "Card", "Dialog", "Popover"].map((item) => (
            <div key={item} className="rounded-md bg-muted/40 px-2 py-1">
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    </TargetSpotlight>
  )
}

function SidebarPreview() {
  return (
    <TargetSpotlight className="w-full max-w-md">
      <SidebarProvider defaultOpen className="min-h-0! overflow-hidden rounded-lg border">
        <Sidebar collapsible="none" className="h-44">
          <SidebarHeader className="font-medium">Workspace</SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Practice</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <PanelLeftIcon />
                      Review
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <SearchIcon />
                      Browse deck
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarTrigger className="m-2" />
      </SidebarProvider>
    </TargetSpotlight>
  )
}

function SonnerPreview() {
  return (
    <TargetSpotlight>
      <Button
        variant="outline"
        onClick={() => toast.success("Saved", { description: "Sonner rendered this notification." })}
      >
        Trigger sonner
      </Button>
    </TargetSpotlight>
  )
}

function SpinnerPreview() {
  return (
    <TargetSpotlight>
      <div className="flex items-center gap-3 rounded-lg border px-4 py-3">
        <Spinner />
        <span className="text-sm font-medium">Loading components</span>
      </div>
    </TargetSpotlight>
  )
}

function ToastPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <div className="rounded-lg border bg-popover p-4 text-popover-foreground shadow-md">
        <div className="flex items-start gap-3">
          <BellIcon className="mt-0.5 text-recall-orange" />
          <div>
            <div className="font-medium">Changes saved</div>
            <div className="text-sm text-muted-foreground">Your component deck was updated.</div>
          </div>
        </div>
      </div>
    </TargetSpotlight>
  )
}

function TogglePreview() {
  return (
    <TargetSpotlight>
      <Toggle variant="outline" defaultPressed aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </TargetSpotlight>
  )
}

function TypographyPreview() {
  return (
    <TargetSpotlight className="w-full max-w-md">
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <h3 className="text-xl font-semibold">Readable hierarchy</h3>
        <p className="text-sm text-muted-foreground">
          Typography gives headings, body copy, lists, and quotes consistent rhythm.
        </p>
        <blockquote className="border-l-2 pl-3 text-sm italic">Names make interfaces easier to learn.</blockquote>
      </article>
    </TargetSpotlight>
  )
}

function ButtonPreview() {
  return (
    <TargetSpotlight>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Save changes</Button>
        <Button variant="outline">Export</Button>
        <Button variant="secondary">Draft</Button>
        <Button variant="ghost" size="icon" aria-label="More actions">
          <MoreHorizontalIcon />
        </Button>
      </div>
    </TargetSpotlight>
  )
}

function CardPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Launch checklist</CardTitle>
          <CardDescription>Three items ready for review.</CardDescription>
          <CardAction>
            <Badge variant="outline">Today</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Progress value={68} />
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </CardFooter>
      </Card>
    </TargetSpotlight>
  )
}

function InputPreview() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="preview-input">Workspace URL</FieldLabel>
        <TargetSpotlight className="p-1">
          <Input id="preview-input" placeholder="acme.design" readOnly />
        </TargetSpotlight>
        <FieldDescription>Lowercase letters and numbers only.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}

function BadgePreview() {
  return (
    <TargetSpotlight>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Badge>Published</Badge>
        <Badge variant="secondary">Draft</Badge>
        <Badge variant="outline">Queued</Badge>
        <Badge variant="destructive">Blocked</Badge>
      </div>
    </TargetSpotlight>
  )
}

function AlertPreview() {
  return (
    <TargetSpotlight className="w-full max-w-md">
      <Alert>
        <TerminalIcon />
        <AlertTitle>Build completed</AlertTitle>
        <AlertDescription>All checks passed in 42 seconds.</AlertDescription>
      </Alert>
    </TargetSpotlight>
  )
}

function ProgressPreview() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Migration</span>
        <span className="text-muted-foreground">72%</span>
      </div>
      <TargetSpotlight className="p-2">
        <Progress value={72} />
      </TargetSpotlight>
    </div>
  )
}

function SeparatorPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <div className="text-sm font-medium">Profile</div>
      <div className="text-sm text-muted-foreground">Name, email, and avatar</div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center justify-center gap-4 text-sm">
        <span>Billing</span>
        <Separator orientation="vertical" />
        <span>Security</span>
        <Separator orientation="vertical" />
        <span>Team</span>
      </div>
    </TargetSpotlight>
  )
}

function TooltipPreview() {
  return (
    <TargetSpotlight>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover target</Button>
          </TooltipTrigger>
          <TooltipContent>Assign owner</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </TargetSpotlight>
  )
}

function TabsPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <Tabs defaultValue="activity">
        <TabsList>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="activity" className="rounded-lg border p-4 text-sm">
          Recent commits and review notes.
        </TabsContent>
        <TabsContent value="settings" className="rounded-lg border p-4 text-sm">
          Notification and account controls.
        </TabsContent>
      </Tabs>
    </TargetSpotlight>
  )
}

function SwitchPreview() {
  return (
    <Field orientation="horizontal" className="max-w-sm rounded-lg border p-4">
      <TargetSpotlight className="p-2">
        <Switch id="preview-switch" defaultChecked />
      </TargetSpotlight>
      <FieldContent>
        <FieldLabel htmlFor="preview-switch">Auto-save drafts</FieldLabel>
        <FieldDescription>Keep local changes while editing.</FieldDescription>
      </FieldContent>
    </Field>
  )
}

function CheckboxPreview() {
  return (
    <Field orientation="horizontal" className="max-w-sm rounded-lg border p-4">
      <TargetSpotlight className="p-2">
        <Checkbox id="preview-checkbox" defaultChecked />
      </TargetSpotlight>
      <FieldContent>
        <FieldLabel htmlFor="preview-checkbox">Include screenshots</FieldLabel>
        <FieldDescription>Add visual context to the report.</FieldDescription>
      </FieldContent>
    </Field>
  )
}

function RadioGroupPreview() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Review depth</FieldLegend>
      <TargetSpotlight>
        <RadioGroup defaultValue="balanced">
          <Field orientation="horizontal">
            <RadioGroupItem value="quick" id="radio-quick" />
            <FieldLabel htmlFor="radio-quick">Quick pass</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="balanced" id="radio-balanced" />
            <FieldLabel htmlFor="radio-balanced">Balanced pass</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="deep" id="radio-deep" />
            <FieldLabel htmlFor="radio-deep">Deep pass</FieldLabel>
          </Field>
        </RadioGroup>
      </TargetSpotlight>
    </FieldSet>
  )
}

function SliderPreview() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel>Confidence</FieldLabel>
        <TargetSpotlight className="p-3">
          <Slider defaultValue={[64]} max={100} step={1} />
        </TargetSpotlight>
        <FieldDescription>Set how certain you are before submitting.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}

function AccordionPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What changed?</AccordionTrigger>
          <AccordionContent>New keyboard handling and local progress storage.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who reviewed it?</AccordionTrigger>
          <AccordionContent>Design, engineering, and product notes are attached.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </TargetSpotlight>
  )
}

function AvatarPreview() {
  return (
    <TargetSpotlight>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>BA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>UI</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
      </div>
    </TargetSpotlight>
  )
}

function SkeletonPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      </div>
    </TargetSpotlight>
  )
}

function DialogPreview() {
  return (
    <PreviewPair
      staticExample={
        <TargetSpotlight className="w-full">
          <div className="w-full rounded-xl border bg-popover p-4 text-popover-foreground shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">Share project</div>
                <div className="text-sm text-muted-foreground">Invite a teammate.</div>
              </div>
              <Button variant="ghost" size="icon-sm" aria-label="Close preview">
                <XCircleIcon />
              </Button>
            </div>
            <Input value="design-system" readOnly />
          </div>
        </TargetSpotlight>
      }
      interactiveExample={
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share project</DialogTitle>
              <DialogDescription>Invite a teammate to this workspace.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      }
    />
  )
}

function SelectPreview() {
  return (
    <TargetSpotlight>
      <Select defaultValue="team">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Choose scope" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="team">Team</SelectItem>
            <SelectItem value="org">Organization</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </TargetSpotlight>
  )
}

function TablePreview() {
  return (
    <TargetSpotlight className="w-full max-w-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV-001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV-002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell className="text-right">$180.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TargetSpotlight>
  )
}

function TextareaPreview() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="preview-textarea">Release notes</FieldLabel>
        <TargetSpotlight className="p-1">
          <Textarea id="preview-textarea" value="Polish keyboard review flow and progress states." readOnly />
        </TargetSpotlight>
      </Field>
    </FieldGroup>
  )
}

function ToggleGroupPreview() {
  return (
    <TargetSpotlight>
      <ToggleGroup type="single" defaultValue="bold" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </TargetSpotlight>
  )
}

function LabelPreview() {
  return (
    <PreviewPair
      staticExample={
        <Field className="w-full">
          <TargetSpotlight className="w-fit p-1">
            <Label htmlFor="preview-label-email">Email address</Label>
          </TargetSpotlight>
          <Input id="preview-label-email" value="you@example.com" readOnly />
        </Field>
      }
      interactiveExample={
        <div className="flex items-center gap-3 rounded-lg border p-4">
          <Checkbox id="preview-label-policy" />
          <TargetSpotlight className="p-1">
            <Label htmlFor="preview-label-policy">Accept team policy</Label>
          </TargetSpotlight>
        </div>
      }
    />
  )
}

function DropdownMenuPreview() {
  return (
    <PreviewPair
      staticExample={
        <TargetSpotlight className="w-44 rounded-lg bg-popover p-1 text-sm text-popover-foreground shadow-md">
          <div className="px-1.5 py-1 text-xs font-medium text-muted-foreground">Workspace</div>
          <Separator className="-mx-1 my-1" />
          <div className="rounded-md px-1.5 py-1">Rename</div>
          <div className="rounded-md px-1.5 py-1">Duplicate</div>
          <div className="rounded-md px-1.5 py-1 text-destructive">Archive</div>
        </TargetSpotlight>
      }
      interactiveExample={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Workspace</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    />
  )
}

function PopoverPreview() {
  return (
    <PreviewPair
      staticExample={
        <TargetSpotlight className="w-56 rounded-lg bg-popover p-4 text-popover-foreground shadow-md">
          <div className="flex flex-col gap-1">
            <div className="font-medium">Sprint scope</div>
            <div className="text-sm text-muted-foreground">Five tasks selected for this week.</div>
          </div>
        </TargetSpotlight>
      }
      interactiveExample={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open details</Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="font-medium">Sprint scope</div>
            <div className="text-sm text-muted-foreground">Five tasks selected for this week.</div>
          </PopoverContent>
        </Popover>
      }
    />
  )
}

function HoverCardPreview() {
  return (
    <PreviewPair
      staticExample={
        <TargetSpotlight className="w-64 rounded-lg bg-popover p-4 text-popover-foreground shadow-md">
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">@componentnerd</div>
              <div className="text-sm text-muted-foreground">Design systems, accessibility, and UI APIs.</div>
            </div>
          </div>
        </TargetSpotlight>
      }
      interactiveExample={
        <HoverCard openDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="link">Open source profile</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm text-muted-foreground">@componentnerd</div>
            </div>
          </HoverCardContent>
        </HoverCard>
      }
    />
  )
}

function BreadcrumbPreview() {
  return (
    <TargetSpotlight>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </TargetSpotlight>
  )
}

function PaginationPreview() {
  const preventNavigation = (event: MouseEvent<HTMLAnchorElement>) => event.preventDefault()

  return (
    <TargetSpotlight>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={preventNavigation} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={preventNavigation}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive onClick={preventNavigation}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={preventNavigation} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </TargetSpotlight>
  )
}

function MenubarPreview() {
  return (
    <TargetSpotlight>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New tab</MenubarItem>
            <MenubarItem>Export</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Zoom in</MenubarItem>
            <MenubarItem>Zoom out</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </TargetSpotlight>
  )
}

function SheetPreview() {
  return (
    <PreviewPair
      staticExample={
        <div className="flex h-40 w-full overflow-hidden rounded-lg border bg-background">
          <div className="flex-1 bg-muted/40" />
          <TargetSpotlight className="w-40 rounded-none rounded-r-lg border-l bg-popover p-4">
            <div className="font-medium">Filters</div>
            <div className="mt-1 text-sm text-muted-foreground">Status and owner.</div>
          </TargetSpotlight>
        </div>
      }
      interactiveExample={
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Status, owner, and date range.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      }
    />
  )
}

function AlertDialogPreview() {
  return (
    <PreviewPair
      staticExample={
        <TargetSpotlight className="w-full">
          <div className="rounded-xl border bg-popover p-4 text-popover-foreground shadow-md">
            <div className="mb-2 flex justify-center">
              <div className="flex size-10 items-center justify-center rounded-md bg-recall-rose/10 text-recall-rose">
                <AlertCircleIcon />
              </div>
            </div>
            <div className="text-center font-medium">Delete workspace?</div>
            <div className="mt-1 text-center text-sm text-muted-foreground">This action cannot be undone.</div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </TargetSpotlight>
      }
      interactiveExample={
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete workspace?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
    />
  )
}

function FieldPreview() {
  return (
    <div className="w-full max-w-sm rounded-xl border bg-card p-4">
      <FieldSet>
        <FieldLegend>Account contact</FieldLegend>
        <FieldGroup>
          <TargetSpotlight className="p-3">
            <Field>
              <FieldLabel htmlFor="field-preview-email">Email</FieldLabel>
              <Input id="field-preview-email" value="you@example.com" readOnly />
              <FieldDescription>Used for product and billing updates.</FieldDescription>
            </Field>
          </TargetSpotlight>
          <Field>
            <FieldLabel htmlFor="field-preview-name">Name</FieldLabel>
            <Input id="field-preview-name" value="Beatrice" readOnly />
            <FieldDescription>Shown to teammates in shared workspaces.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}

function EmptyPreview() {
  return (
    <TargetSpotlight className="w-full max-w-sm">
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchIcon />
          </EmptyMedia>
          <EmptyTitle>No matches</EmptyTitle>
          <EmptyDescription>Try another query or clear the filters.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            Clear filters
          </Button>
        </EmptyContent>
      </Empty>
    </TargetSpotlight>
  )
}

const STUDY_CARDS: StudyCard[] = [
  {
    id: "accordion",
    answer: "Accordion",
    aliases: ["accordion", "disclosure"],
    category: "Layout",
    clue: "Stacked sections that expand and collapse.",
    usage: "Usage: Accordions are expandable drawers; use them to hide secondary detail until someone asks for it.",
    preview: <AccordionPreview />,
  },
  {
    id: "alert",
    answer: "Alert",
    aliases: ["alert", "callout"],
    category: "Feedback",
    clue: "A message block for status, warnings, or contextual info.",
    usage: "Usage: Alerts are the page clearing its throat; use them when information needs attention near the current task.",
    preview: <AlertPreview />,
  },
  {
    id: "alert-dialog",
    answer: "Alert Dialog",
    aliases: ["alert dialog", "alertdialog", "confirmation dialog"],
    category: "Overlay",
    clue: "A confirmation modal for consequential actions.",
    usage: "Usage: Alert dialogs are stop signs; use them before destructive or irreversible actions.",
    preview: <AlertDialogPreview />,
  },
  {
    id: "aspect-ratio",
    answer: "Aspect Ratio",
    aliases: ["aspect ratio", "aspectratio"],
    category: "Layout",
    clue: "A box that keeps media locked to a chosen width-to-height ratio.",
    usage: "Usage: Aspect ratios are picture frames; use them so media keeps its shape while the page resizes.",
    preview: <AspectRatioPreview />,
  },
  {
    id: "avatar",
    answer: "Avatar",
    aliases: ["avatar", "profile image"],
    category: "Display",
    clue: "A user identity image or fallback initials.",
    usage: "Usage: Avatars are face/name anchors; use them to make people or accounts recognizable at a glance.",
    preview: <AvatarPreview />,
  },
  {
    id: "badge",
    answer: "Badge",
    aliases: ["badge", "badges"],
    category: "Display",
    clue: "A compact label for status or metadata.",
    usage: "Usage: Badges are little sticky notes; use them for status, counts, or compact labels.",
    preview: <BadgePreview />,
  },
  {
    id: "breadcrumb",
    answer: "Breadcrumb",
    aliases: ["breadcrumb", "breadcrumbs"],
    category: "Navigation",
    clue: "A path showing hierarchy and current location.",
    usage: "Usage: Breadcrumbs are trail markers; use them to show where the current page sits in a hierarchy.",
    preview: <BreadcrumbPreview />,
  },
  {
    id: "button",
    answer: "Button",
    aliases: ["button", "buttons"],
    category: "Action",
    clue: "A clickable command control with variants and sizes.",
    usage: "Usage: Buttons are the app's door handles; use them when the user is meant to do something now.",
    preview: <ButtonPreview />,
  },
  {
    id: "button-group",
    answer: "Button Group",
    aliases: ["button group", "buttongroup"],
    category: "Action",
    clue: "A joined set of related buttons.",
    usage: "Usage: Button groups are toolbars; use them when adjacent actions belong to one control cluster.",
    preview: <ButtonGroupPreview />,
  },
  {
    id: "calendar",
    answer: "Calendar",
    aliases: ["calendar", "date calendar"],
    category: "Date",
    clue: "A grid for viewing or selecting dates.",
    usage: "Usage: Calendars are month maps; use them when people need to pick or inspect dates directly.",
    preview: <CalendarPreview />,
  },
  {
    id: "card",
    answer: "Card",
    aliases: ["card"],
    category: "Layout",
    clue: "A surface with header, content, optional action, and footer.",
    usage: "Usage: Cards are trays for one idea; group a small chunk of related content and actions inside them.",
    preview: <CardPreview />,
  },
  {
    id: "carousel",
    answer: "Carousel",
    aliases: ["carousel", "slider carousel"],
    category: "Display",
    clue: "A horizontally scrollable set of panels.",
    usage: "Usage: Carousels are slide reels; use them for browsing a small sequence without leaving the page.",
    preview: <CarouselPreview />,
  },
  {
    id: "chart",
    answer: "Chart",
    aliases: ["chart", "graph"],
    category: "Data",
    clue: "A visual data display with axes, tooltips, and series.",
    usage: "Usage: Charts are data pictures; use them when shape and trend matter more than raw rows.",
    preview: <ChartPreview />,
  },
  {
    id: "checkbox",
    answer: "Checkbox",
    aliases: ["checkbox", "check box"],
    category: "Form",
    clue: "A square binary selection control.",
    usage: "Usage: Checkboxes are checklist ticks; use them when choices can be independently selected.",
    preview: <CheckboxPreview />,
  },
  {
    id: "collapsible",
    answer: "Collapsible",
    aliases: ["collapsible", "collapse"],
    category: "Layout",
    clue: "A single region that can open or close.",
    usage: "Usage: Collapsibles are foldable notes; use them to tuck one optional block behind a trigger.",
    preview: <CollapsiblePreview />,
  },
  {
    id: "combobox",
    answer: "Combobox",
    aliases: ["combobox", "combo box", "autocomplete"],
    category: "Form",
    clue: "An input paired with selectable suggestions.",
    usage: "Usage: Comboboxes are searchable pickers; use them when a list is long enough to type-filter.",
    preview: <ComboboxPreview />,
  },
  {
    id: "command",
    answer: "Command",
    aliases: ["command", "command palette"],
    category: "Navigation",
    clue: "A searchable command menu.",
    usage: "Usage: Commands are keyboard launchers; use them for fast search, navigation, and app actions.",
    preview: <CommandPreview />,
  },
  {
    id: "context-menu",
    answer: "Context Menu",
    aliases: ["context menu", "right click menu"],
    category: "Overlay",
    clue: "A menu opened from a contextual target, often right-click.",
    usage: "Usage: Context menus are right-click action pockets; use them for actions tied to the exact thing under the pointer.",
    preview: <ContextMenuPreview />,
  },
  {
    id: "data-table",
    answer: "Data Table",
    aliases: ["data table", "datatable"],
    category: "Data",
    clue: "A richer table pattern with filtering, sorting, selection, or column controls.",
    usage: "Usage: Data tables are work grids; use them when rows need filtering, sorting, selection, and actions.",
    preview: <DataTablePreview />,
  },
  {
    id: "date-picker",
    answer: "Date Picker",
    aliases: ["date picker", "datepicker"],
    category: "Date",
    clue: "A trigger that opens a calendar to choose a date.",
    usage: "Usage: Date pickers are calendar popovers; use them when a form needs one precise date.",
    preview: <DatePickerPreview />,
  },
  {
    id: "dialog",
    answer: "Dialog",
    aliases: ["dialog", "modal", "modal dialog"],
    category: "Overlay",
    clue: "A modal window over the current page.",
    usage: "Usage: Dialogs are focused rooms; use them when the user must handle one task before returning to the page.",
    preview: <DialogPreview />,
  },
  {
    id: "direction",
    answer: "Direction",
    aliases: ["direction", "direction provider", "rtl"],
    category: "Layout",
    clue: "A provider for left-to-right or right-to-left reading direction.",
    usage: "Usage: Direction providers are layout compasses; use them when language direction changes how controls should flow.",
    preview: <DirectionPreview />,
  },
  {
    id: "drawer",
    answer: "Drawer",
    aliases: ["drawer", "bottom drawer"],
    category: "Overlay",
    clue: "A bottom sheet-style panel for mobile-friendly tasks.",
    usage: "Usage: Drawers are bottom work trays; use them for mobile filters, forms, or details that slide up.",
    preview: <DrawerPreview />,
  },
  {
    id: "dropdown-menu",
    answer: "Dropdown Menu",
    aliases: ["dropdown menu", "dropdown", "drop down menu"],
    category: "Overlay",
    clue: "A menu of actions opened from a trigger.",
    usage: "Usage: Dropdown menus are action pockets; use them to tuck secondary commands behind one trigger.",
    preview: <DropdownMenuPreview />,
  },
  {
    id: "empty",
    answer: "Empty",
    aliases: ["empty", "empty state"],
    category: "Feedback",
    clue: "A structured blank state when there is nothing to show.",
    usage: "Usage: Empty states are friendly blank rooms; use them when a list or search has no content yet.",
    preview: <EmptyPreview />,
  },
  {
    id: "field",
    answer: "Field",
    aliases: ["field"],
    category: "Form",
    clue: "One labeled form unit: label, control, description, and optional error.",
    usage: "Usage: A Field is one complete form row; it keeps the label, input, hint, and error message attached.",
    preview: <FieldPreview />,
  },
  {
    id: "hover-card",
    answer: "Hover Card",
    aliases: ["hover card", "hovercard"],
    category: "Overlay",
    clue: "Preview content that appears from hover or focus.",
    usage: "Usage: Hover cards are preview cards; use them to peek at profile or link details before opening fully.",
    preview: <HoverCardPreview />,
  },
  {
    id: "input",
    answer: "Input",
    aliases: ["input", "text input"],
    category: "Form",
    clue: "A single-line text field.",
    usage: "Usage: Inputs are blank lines in a form; use them when the user needs to type one short value.",
    preview: <InputPreview />,
  },
  {
    id: "input-group",
    answer: "Input Group",
    aliases: ["input group", "inputgroup"],
    category: "Form",
    clue: "An input with inline add-ons or buttons.",
    usage: "Usage: Input groups are input toolbelts; use them when a field needs prefixes, suffixes, or inline actions.",
    preview: <InputGroupPreview />,
  },
  {
    id: "input-otp",
    answer: "Input OTP",
    aliases: ["input otp", "otp input", "one time password"],
    category: "Form",
    clue: "Segmented inputs for one-time codes.",
    usage: "Usage: Input OTPs are code slots; use them when people enter verification codes one character at a time.",
    preview: <InputOTPPreview />,
  },
  {
    id: "item",
    answer: "Item",
    aliases: ["item", "list item"],
    category: "Display",
    clue: "A structured row with media, content, and actions.",
    usage: "Usage: Items are tidy list rows; use them when repeated content needs a consistent media/content/action shape.",
    preview: <ItemPreview />,
  },
  {
    id: "kbd",
    answer: "Kbd",
    aliases: ["kbd", "keyboard key", "keyboard shortcut"],
    category: "Display",
    clue: "A visual representation of keyboard keys.",
    usage: "Usage: Kbd keys are keyboard caps; use them when documenting shortcuts or typed commands.",
    preview: <KbdPreview />,
  },
  {
    id: "label",
    answer: "Label",
    aliases: ["label", "form label"],
    category: "Form",
    clue: "Accessible text associated with a control.",
    usage: "Usage: Labels are name tags for controls; use them so inputs, checkboxes, and switches are understandable.",
    preview: <LabelPreview />,
  },
  {
    id: "menubar",
    answer: "Menubar",
    aliases: ["menubar", "menu bar"],
    category: "Navigation",
    clue: "A persistent horizontal menu.",
    usage: "Usage: Menubars are desktop-style command rails; use them for persistent top-level menus.",
    preview: <MenubarPreview />,
  },
  {
    id: "native-select",
    answer: "Native Select",
    aliases: ["native select", "native dropdown"],
    category: "Form",
    clue: "A styled browser-native select element.",
    usage: "Usage: Native selects are browser pickers; use them when platform-native option menus are enough.",
    preview: <NativeSelectPreview />,
  },
  {
    id: "navigation-menu",
    answer: "Navigation Menu",
    aliases: ["navigation menu", "nav menu"],
    category: "Navigation",
    clue: "A top-level nav control with expandable content.",
    usage: "Usage: Navigation menus are site maps; use them for primary navigation with grouped destinations.",
    preview: <NavigationMenuPreview />,
  },
  {
    id: "pagination",
    answer: "Pagination",
    aliases: ["pagination", "pager"],
    category: "Navigation",
    clue: "Controls for moving between pages of results.",
    usage: "Usage: Pagination is a page turner; use it when a long result set is split into numbered pages.",
    preview: <PaginationPreview />,
  },
  {
    id: "popover",
    answer: "Popover",
    aliases: ["popover", "pop over"],
    category: "Overlay",
    clue: "Floating rich content anchored to a trigger.",
    usage: "Usage: Popovers are small anchored panels; use them for richer controls or details without leaving the page.",
    preview: <PopoverPreview />,
  },
  {
    id: "progress",
    answer: "Progress",
    aliases: ["progress", "progress bar"],
    category: "Feedback",
    clue: "A horizontal indicator for completion.",
    usage: "Usage: Progress is a loading ruler; use it to show how far a known task has advanced.",
    preview: <ProgressPreview />,
  },
  {
    id: "radio-group",
    answer: "Radio Group",
    aliases: ["radio group", "radiogroup", "radio"],
    category: "Form",
    clue: "A grouped set where one option is selected.",
    usage: "Usage: Radio groups are station selectors; use them when exactly one option from a set can win.",
    preview: <RadioGroupPreview />,
  },
  {
    id: "resizable",
    answer: "Resizable",
    aliases: ["resizable", "resizable panels"],
    category: "Layout",
    clue: "Panels separated by draggable handles.",
    usage: "Usage: Resizables are adjustable panes; use them when users need to rebalance workspace areas.",
    preview: <ResizablePreview />,
  },
  {
    id: "scroll-area",
    answer: "Scroll Area",
    aliases: ["scroll area", "scrollarea"],
    category: "Layout",
    clue: "A custom scrollable viewport.",
    usage: "Usage: Scroll areas are contained scroll windows; use them when only one region should scroll.",
    preview: <ScrollAreaPreview />,
  },
  {
    id: "select",
    answer: "Select",
    aliases: ["select", "dropdown select"],
    category: "Form",
    clue: "A trigger that opens a list of choices.",
    usage: "Usage: Selects are compact pickers; use them when one value must be chosen from a known list.",
    preview: <SelectPreview />,
  },
  {
    id: "separator",
    answer: "Separator",
    aliases: ["separator", "divider"],
    category: "Layout",
    clue: "A horizontal or vertical divider.",
    usage: "Usage: Separators are quiet fence lines; use them to divide related groups without adding another container.",
    preview: <SeparatorPreview />,
  },
  {
    id: "sheet",
    answer: "Sheet",
    aliases: ["sheet", "side sheet", "panel"],
    category: "Overlay",
    clue: "A panel that slides in from an edge.",
    usage: "Usage: Sheets are slide-out workbenches; use them for side tasks, filters, or details that stay near the page.",
    preview: <SheetPreview />,
  },
  {
    id: "sidebar",
    answer: "Sidebar",
    aliases: ["sidebar", "side bar"],
    category: "Navigation",
    clue: "A full navigation rail with groups, menus, and collapse behavior.",
    usage: "Usage: Sidebars are app rails; use them for persistent workspace navigation and grouped sections.",
    preview: <SidebarPreview />,
  },
  {
    id: "skeleton",
    answer: "Skeleton",
    aliases: ["skeleton", "loading skeleton", "placeholder"],
    category: "Feedback",
    clue: "A placeholder shown while content loads.",
    usage: "Usage: Skeletons sketch the bones of content; use them to hold the layout shape while real data loads.",
    preview: <SkeletonPreview />,
  },
  {
    id: "slider",
    answer: "Slider",
    aliases: ["slider", "range"],
    category: "Form",
    clue: "A draggable control for a numeric range.",
    usage: "Usage: Sliders are volume knobs; use them when a rough numeric value is easier to drag than type.",
    preview: <SliderPreview />,
  },
  {
    id: "sonner",
    answer: "Sonner",
    aliases: ["sonner", "toaster"],
    category: "Feedback",
    clue: "A toast notification system.",
    usage: "Usage: Sonner is the toast engine; use it to render polished notifications from anywhere in the app.",
    preview: <SonnerPreview />,
  },
  {
    id: "spinner",
    answer: "Spinner",
    aliases: ["spinner", "loading spinner"],
    category: "Feedback",
    clue: "A small animated loading indicator.",
    usage: "Usage: Spinners are waiting wheels; use them when work is happening but progress length is unknown.",
    preview: <SpinnerPreview />,
  },
  {
    id: "switch",
    answer: "Switch",
    aliases: ["switch", "toggle switch"],
    category: "Form",
    clue: "A binary on/off control.",
    usage: "Usage: Switches are light switches; use them for settings that turn something on or off immediately.",
    preview: <SwitchPreview />,
  },
  {
    id: "table",
    answer: "Table",
    aliases: ["table"],
    category: "Data",
    clue: "Rows and columns for structured data.",
    usage: "Usage: Tables are spreadsheets in miniature; use them when users need to scan or compare structured rows.",
    preview: <TablePreview />,
  },
  {
    id: "tabs",
    answer: "Tabs",
    aliases: ["tabs", "tab"],
    category: "Navigation",
    clue: "A segmented interface for switching panels.",
    usage: "Usage: Tabs are folder dividers; use them when sibling panels share the same space.",
    preview: <TabsPreview />,
  },
  {
    id: "textarea",
    answer: "Textarea",
    aliases: ["textarea", "text area", "multi line input"],
    category: "Form",
    clue: "A multi-line text field.",
    usage: "Usage: Textareas are writing boxes; use them when the answer needs paragraphs instead of one line.",
    preview: <TextareaPreview />,
  },
  {
    id: "toast",
    answer: "Toast",
    aliases: ["toast", "notification"],
    category: "Feedback",
    clue: "A temporary notification message.",
    usage: "Usage: Toasts are little announcements; use them for brief success, error, or status messages.",
    preview: <ToastPreview />,
  },
  {
    id: "toggle",
    answer: "Toggle",
    aliases: ["toggle", "toggle button"],
    category: "Form",
    clue: "A single pressed/unpressed button.",
    usage: "Usage: Toggles are pressable switches; use them when one compact button can stay on or off.",
    preview: <TogglePreview />,
  },
  {
    id: "toggle-group",
    answer: "Toggle Group",
    aliases: ["toggle group", "togglegroup", "segmented toggle"],
    category: "Form",
    clue: "A grouped set of pressed/unpressed controls.",
    usage: "Usage: Toggle groups are button toolbelts; use them for mode switches like bold, italic, or view style.",
    preview: <ToggleGroupPreview />,
  },
  {
    id: "tooltip",
    answer: "Tooltip",
    aliases: ["tooltip", "tool tip"],
    category: "Overlay",
    clue: "A small hint anchored to a target.",
    usage: "Usage: Tooltips are whisper notes; use them for tiny hints on icons or compact controls.",
    preview: <TooltipPreview />,
  },
  {
    id: "typography",
    answer: "Typography",
    aliases: ["typography", "type"],
    category: "Display",
    clue: "Readable text styles for headings, paragraphs, lists, and quotes.",
    usage: "Usage: Typography is the reading system; use it to make text hierarchy and rhythm consistent.",
    preview: <TypographyPreview />,
  },
]

function defaultRecord(): ReviewRecord {
  return {
    dueAt: 0,
    intervalDays: 0,
    ease: 2.35,
    reps: 0,
    lapses: 0,
    seen: 0,
    correct: 0,
    incorrect: 0,
  }
}

function buildInitialProgress(saved?: Partial<ProgressState>): ProgressState {
  return STUDY_CARDS.reduce<ProgressState>((progress, card) => {
    progress[card.id] = {
      ...defaultRecord(),
      ...(saved?.[card.id] ?? {}),
    }
    return progress
  }, {})
}

function loadProgress(): ProgressState {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return buildInitialProgress()
    }
    return buildInitialProgress(JSON.parse(stored) as ProgressState)
  } catch {
    return buildInitialProgress()
  }
}

function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .replace(/\b(shadcn|ui|component|components)\b/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "")
}

function isCorrectAnswer(card: StudyCard, guess: string) {
  const normalizedGuess = normalizeAnswer(guess)
  const accepted = [card.answer, ...card.aliases].map(normalizeAnswer)

  return accepted.includes(normalizedGuess)
}

function orderedCards(progress: ProgressState, includeFuture: boolean) {
  const now = Date.now()

  return [...STUDY_CARDS]
    .filter((card) => includeFuture || progress[card.id].dueAt <= now)
    .sort((a, b) => {
      const aRecord = progress[a.id]
      const bRecord = progress[b.id]

      if (aRecord.dueAt !== bRecord.dueAt) {
        return aRecord.dueAt - bRecord.dueAt
      }

      if (aRecord.seen !== bRecord.seen) {
        return aRecord.seen - bRecord.seen
      }

      return a.answer.localeCompare(b.answer)
    })
}

function weakCards(progress: ProgressState) {
  return orderedCards(progress, true).filter((card) => {
    const record = progress[card.id]
    const accuracy = record.seen ? record.correct / record.seen : 1

    return (record.lapses > 0 && record.intervalDays < 3) || (record.seen >= 2 && accuracy < 0.75)
  })
}

function reviewCards(progress: ProgressState, mode: ReviewMode) {
  if (mode === "all") {
    return orderedCards(progress, true)
  }

  if (mode === "weak") {
    return weakCards(progress)
  }

  return orderedCards(progress, false)
}

function gradeRecord(record: ReviewRecord, grade: Grade, wasCorrect: boolean): ReviewRecord {
  const now = Date.now()
  const ease = record.ease || 2.35
  let nextEase = ease
  let intervalDays = record.intervalDays || 0
  let dueAt = now
  let reps = record.reps
  let lapses = record.lapses

  if (grade === "again") {
    nextEase = Math.max(1.3, ease - 0.2)
    intervalDays = 0
    dueAt = now
    lapses += 1
  }

  if (grade === "hard") {
    nextEase = Math.max(1.3, ease - 0.1)
    intervalDays = Math.max(0.25, intervalDays * 1.2 || 0.25)
    dueAt = now + intervalDays * DAY
    reps += 1
  }

  if (grade === "good") {
    intervalDays = reps === 0 ? 1 : reps === 1 ? 3 : Math.max(1, intervalDays * ease)
    dueAt = now + intervalDays * DAY
    reps += 1
  }

  if (grade === "easy") {
    nextEase = ease + 0.15
    intervalDays = reps === 0 ? 3 : Math.max(3, intervalDays * (nextEase + 0.35))
    dueAt = now + intervalDays * DAY
    reps += 1
  }

  return {
    ...record,
    dueAt,
    intervalDays: Math.round(intervalDays * 10) / 10,
    ease: Math.round(nextEase * 100) / 100,
    reps,
    lapses,
    seen: record.seen + 1,
    correct: record.correct + (wasCorrect ? 1 : 0),
    incorrect: record.incorrect + (wasCorrect ? 0 : 1),
  }
}

function formatDue(dueAt: number) {
  const diff = dueAt - Date.now()

  if (diff <= 0) {
    return "Due now"
  }

  if (diff < 60 * 60 * 1000) {
    return `${Math.ceil(diff / (60 * 1000))}m`
  }

  if (diff < DAY) {
    return `${Math.ceil(diff / (60 * 60 * 1000))}h`
  }

  return `${Math.ceil(diff / DAY)}d`
}

function App() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress())
  const [answer, setAnswer] = useState("")
  const [attempt, setAttempt] = useState<AttemptResult | null>(null)
  const [clueMode, setClueMode] = useState(false)
  const [definitionMode, setDefinitionMode] = useState(false)
  const [memoryMode, setMemoryMode] = useState(false)
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("review")
  const [reviewMode, setReviewMode] = useState<ReviewMode>("due")
  const [retryAfterReview, setRetryAfterReview] = useState<Record<string, number>>({})
  const [retryQueue, setRetryQueue] = useState<string[]>([])
  const [session, setSession] = useState<SessionStats>({ reviewed: 0, correct: 0 })
  const [sessionAnswers, setSessionAnswers] = useState<SessionAnswer[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const dueCards = useMemo(() => orderedCards(progress, false), [progress])
  const weakCount = useMemo(() => weakCards(progress).length, [progress])
  const baseReviewPool = useMemo(() => reviewCards(progress, reviewMode), [progress, reviewMode])
  const reviewPool = useMemo(() => {
    const retryOrder = new Map(retryQueue.map((cardId, index) => [cardId, index]))
    const visibleCards = baseReviewPool.filter(
      (card) => card.id === currentId || (retryAfterReview[card.id] ?? 0) <= session.reviewed
    )

    const prioritizedCards = [...visibleCards].sort((a, b) => {
      const aRetryOrder = retryOrder.get(a.id)
      const bRetryOrder = retryOrder.get(b.id)
      const aRetryDue = aRetryOrder !== undefined && (retryAfterReview[a.id] ?? 0) <= session.reviewed
      const bRetryDue = bRetryOrder !== undefined && (retryAfterReview[b.id] ?? 0) <= session.reviewed

      if (aRetryDue !== bRetryDue) {
        return aRetryDue ? -1 : 1
      }

      if (aRetryDue && bRetryDue) {
        return (aRetryOrder ?? 0) - (bRetryOrder ?? 0)
      }

      return 0
    })

    return prioritizedCards.length ? prioritizedCards : baseReviewPool
  }, [baseReviewPool, currentId, retryAfterReview, retryQueue, session.reviewed])
  const currentCard = useMemo(() => {
    if (!reviewPool.length) {
      return null
    }

    return reviewPool.find((card) => card.id === currentId) ?? reviewPool[0]
  }, [currentId, reviewPool])

  useEffect(() => {
    inputRef.current?.focus()
  }, [currentCard?.id])

  function submitAnswer() {
    if (!currentCard) {
      return
    }

    if (attempt) {
      completeAttempt()
      return
    }

    const trimmed = answer.trim()
    if (!trimmed) {
      setAttempt({ guess: "Skipped", correct: false })
      return
    }

    setAttempt({
      guess: trimmed,
      correct: isCorrectAnswer(currentCard, trimmed),
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    submitAnswer()
  }

  function handleAnswerKeyDown(event: KeyboardEvent<HTMLFormElement>) {
    if (
      event.key !== "Enter" ||
      event.shiftKey ||
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.nativeEvent.isComposing
    ) {
      return
    }

    const target = event.target

    if (target instanceof HTMLElement && (target.isContentEditable || target.tagName === "TEXTAREA")) {
      return
    }

    event.preventDefault()
    submitAnswer()
  }

  function revealAnswer() {
    if (!currentCard) {
      return
    }

    setAttempt({ guess: answer.trim() || "Revealed", correct: false })
  }

  const completeAttempt = useCallback(() => {
    if (!currentCard || !attempt) {
      return
    }

    const grade: Grade = attempt.correct ? "good" : "again"
    const nextProgress = {
      ...progress,
      [currentCard.id]: gradeRecord(progress[currentCard.id], grade, attempt.correct),
    }
    const nextReviewed = session.reviewed + 1
    const nextRetryAfterReview = { ...retryAfterReview }
    let nextRetryQueue = retryQueue.filter((cardId) => cardId !== currentCard.id)

    if (attempt.correct) {
      delete nextRetryAfterReview[currentCard.id]
    } else {
      nextRetryAfterReview[currentCard.id] = nextReviewed + MISS_RETRY_REVIEWS - 1
      nextRetryQueue = [...nextRetryQueue, currentCard.id]
    }

    const nextPool = reviewCards(nextProgress, reviewMode)
    const nextPoolById = new Map(nextPool.map((card) => [card.id, card]))
    const nextRetryCard =
      nextRetryQueue
        .filter((cardId) => cardId !== currentCard.id && (nextRetryAfterReview[cardId] ?? 0) <= nextReviewed)
        .map((cardId) => nextPoolById.get(cardId))
        .find((card): card is StudyCard => Boolean(card)) ?? null
    const visibleNextPool = nextPool.filter(
      (card) =>
        card.id !== currentCard.id &&
        !nextRetryQueue.includes(card.id) &&
        (nextRetryAfterReview[card.id] ?? 0) <= nextReviewed
    )
    const fallbackNextPool = nextPool.filter((card) => card.id !== currentCard.id && !nextRetryQueue.includes(card.id))
    const nextCard =
      nextRetryCard ??
      visibleNextPool[0] ??
      fallbackNextPool[0] ??
      nextPool.find((card) => card.id !== currentCard.id) ??
      nextPool[0] ??
      null

    setProgress(nextProgress)
    setRetryAfterReview(nextRetryAfterReview)
    setRetryQueue(nextRetryQueue)
    setCurrentId(nextCard?.id ?? null)
    setAnswer("")
    setAttempt(null)
    setSessionAnswers((current) => [...current, attempt.correct ? "correct" : "incorrect"])
    setSession({
      reviewed: nextReviewed,
      correct: session.correct + (attempt.correct ? 1 : 0),
    })
  }, [attempt, currentCard, progress, retryAfterReview, retryQueue, reviewMode, session.correct, session.reviewed])

  function changeReviewMode(value: string) {
    if (!value) {
      return
    }

    setReviewMode(value as ReviewMode)
    setCurrentId(null)
    setAnswer("")
    setAttempt(null)
    setSessionAnswers([])
  }

  function practiceCard(cardId: string) {
    setReviewMode("all")
    setRetryAfterReview((current) => {
      const next = { ...current }
      delete next[cardId]
      return next
    })
    setRetryQueue((current) => current.filter((queuedCardId) => queuedCardId !== cardId))
    setCurrentId(cardId)
    setAnswer("")
    setAttempt(null)
    setActiveTab("review")
  }

  function resetProgress() {
    setProgress(buildInitialProgress())
    setAnswer("")
    setAttempt(null)
    setCurrentId(null)
    setReviewMode("due")
    setRetryAfterReview({})
    setRetryQueue([])
    setSession({ reviewed: 0, correct: 0 })
    setSessionAnswers([])
  }

  return (
    <>
      <main className="min-h-dvh bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <TabsList className="w-fit">
                  <TabsTrigger value="review">Review</TabsTrigger>
                  <TabsTrigger value="deck">Deck</TabsTrigger>
                </TabsList>
                <ToggleGroup type="single" variant="outline" value={reviewMode} onValueChange={changeReviewMode}>
                  <ToggleGroupItem value="due" aria-label="Due cards">
                    Due
                    <Badge variant="secondary">{dueCards.length}</Badge>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="weak" aria-label="Weak cards">
                    Weak
                    <Badge variant="secondary">{weakCount}</Badge>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="all" aria-label="All cards">
                    All
                    <Badge variant="secondary">{STUDY_CARDS.length}</Badge>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant={clueMode ? "default" : "outline"}
                  size="sm"
                  aria-pressed={clueMode}
                  onClick={() => setClueMode((enabled) => !enabled)}
                >
                  <BrainIcon data-icon="inline-start" />
                  Clue mode
                </Button>
                <Button
                  type="button"
                  variant={definitionMode ? "default" : "outline"}
                  size="sm"
                  aria-pressed={definitionMode}
                  onClick={() => setDefinitionMode((enabled) => !enabled)}
                >
                  <InfoIcon data-icon="inline-start" />
                  Definitions
                </Button>
                <Button
                  type="button"
                  variant={memoryMode ? "default" : "outline"}
                  size="sm"
                  aria-pressed={memoryMode}
                  onClick={() => setMemoryMode((enabled) => !enabled)}
                >
                  <LightbulbIcon data-icon="inline-start" />
                  Memory
                </Button>
              </div>
            </div>

            <TabsContent value="review" className="mt-0">
              {currentCard ? (
                <section>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-lg border bg-card p-3">
                      <div className="mb-2 text-sm font-medium text-muted-foreground">
                        {Math.min(sessionAnswers.length, STUDY_CARDS.length)} / {STUDY_CARDS.length}
                      </div>
                      <QuestionProgress results={sessionAnswers} total={STUDY_CARDS.length} />
                    </div>

                    {(clueMode || definitionMode || memoryMode) && (
                      <Alert className="rounded-xl border-2 border-recall-orange bg-recall-orange/12 p-4 shadow-md ring-4 ring-recall-orange/20">
                        <div className="flex flex-col gap-4">
                          {clueMode && (
                            <div className="grid grid-cols-[auto_1fr] gap-x-3">
                              <BrainIcon className="mt-0.5 text-recall-orange" />
                              <div className="flex flex-col gap-1">
                                <AlertTitle className="font-heading text-base font-semibold text-recall-orange">
                                  Clue
                                </AlertTitle>
                                <AlertDescription className="text-base font-semibold leading-relaxed text-foreground">
                                  {currentCard.clue}
                                </AlertDescription>
                              </div>
                            </div>
                          )}
                          {memoryMode && (
                            <div className="grid grid-cols-[auto_1fr] gap-x-3">
                              <LightbulbIcon className="mt-0.5 text-recall-orange" />
                              <div className="flex flex-col gap-1">
                                <AlertTitle className="font-heading text-base font-semibold text-recall-orange">
                                  Memory
                                </AlertTitle>
                                <AlertDescription className="text-base font-semibold leading-relaxed text-foreground">
                                  {memoryRule(currentCard)}
                                </AlertDescription>
                              </div>
                            </div>
                          )}
                          {definitionMode && (
                            <div className="grid grid-cols-[auto_1fr] gap-x-3">
                              <InfoIcon className="mt-0.5 text-recall-orange" />
                              <div className="flex flex-col gap-1">
                                <AlertTitle className="font-heading text-base font-semibold text-recall-orange">
                                  Definition
                                </AlertTitle>
                                <AlertDescription className="text-base font-semibold leading-relaxed text-foreground">
                                  {definitionPrompt(currentCard)}
                                </AlertDescription>
                              </div>
                            </div>
                          )}
                        </div>
                      </Alert>
                    )}

                    <PreviewStage>{currentCard.preview}</PreviewStage>

                    <form onSubmit={handleSubmit} onKeyDown={handleAnswerKeyDown} className="rounded-lg border bg-card p-4">
                      <FieldGroup>
                        <Field data-invalid={attempt?.correct === false || undefined}>
                          <FieldLabel htmlFor="answer">What is the highlighted component called?</FieldLabel>
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <Input
                              ref={inputRef}
                              id="answer"
                              value={answer}
                              onChange={(event) => setAnswer(event.target.value)}
                              placeholder="Type the shadcn component name"
                              aria-invalid={attempt?.correct === false || undefined}
                              autoComplete="off"
                              readOnly={!!attempt}
                            />
                            <Button type="submit" className="sm:w-32">
                              {attempt ? "Next" : "Check"}
                              <ArrowRightIcon data-icon="inline-end" />
                            </Button>
                          </div>
                        </Field>
                      </FieldGroup>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <Button type="button" variant="outline" onClick={revealAnswer} disabled={!!attempt}>
                          <EyeIcon data-icon="inline-start" />
                          Reveal
                        </Button>
                      </div>

                      {attempt && (
                        <div className="mt-4 rounded-lg border bg-background p-4" aria-live="polite">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex gap-3">
                              {attempt.correct ? (
                                <CheckCircle2Icon className="mt-0.5 size-5 text-recall-mint" />
                              ) : (
                                <XCircleIcon className="mt-0.5 size-5 text-recall-rose" />
                              )}
                              <div>
                                <div className="font-medium">{attempt.correct ? "Correct" : "Not quite"}</div>
                                <div className="text-sm text-muted-foreground">
                                  You typed <span className="font-medium text-foreground">{attempt.guess}</span>. The answer is{" "}
                                  <span className="font-medium text-foreground">{currentCard.answer}</span>.
                                </div>
                              </div>
                            </div>
                          </div>

                          <Alert className="mt-4">
                            <InfoIcon />
                            <AlertDescription className="font-medium italic text-foreground">
                              {currentCard.usage.replace(/^Usage:\s*/i, "")}
                            </AlertDescription>
                          </Alert>

                          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-sm text-muted-foreground">
                              {attempt.correct
                                ? "Nice. This one moves further out."
                                : "This one will return within about five cards."}
                            </div>
                            <Button type="button" onClick={completeAttempt}>
                              Next card
                              <ArrowRightIcon data-icon="inline-end" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </section>
              ) : (
                <Empty className="min-h-[460px] border border-dashed">
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <SparklesIcon />
                    </EmptyMedia>
                    <EmptyTitle>All due cards are done</EmptyTitle>
                    <EmptyDescription>
                      {reviewMode === "weak"
                        ? "No weak cards yet. Miss a component or reveal one, and it will appear here."
                        : "Your next scheduled component will appear when it is due. You can study ahead if you want more reps now."}
                    </EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent className="flex-row justify-center">
                    <Button onClick={() => changeReviewMode("all")}>
                      <CalendarClockIcon data-icon="inline-start" />
                      Study ahead
                    </Button>
                    <Button variant="outline" onClick={resetProgress}>
                      <RefreshCcwIcon data-icon="inline-start" />
                      Restart deck
                    </Button>
                  </EmptyContent>
                </Empty>
              )}
            </TabsContent>

            <TabsContent value="deck" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Deck progress</CardTitle>
                  <CardDescription>
                    Local progress for {STUDY_CARDS.length} shadcn components. Names are shown here for study mode.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Component</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Due</TableHead>
                          <TableHead className="text-right">Reviews</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {STUDY_CARDS.map((card) => {
                          const record = progress[card.id]

                          return (
                            <TableRow key={card.id}>
                              <TableCell className="font-medium">{card.answer}</TableCell>
                              <TableCell>
                                <Badge variant="outline">{card.category}</Badge>
                              </TableCell>
                              <TableCell>{formatDue(record.dueAt)}</TableCell>
                              <TableCell className="text-right">{record.seen}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" onClick={() => practiceCard(card.id)}>
                                  Practice
                                  <ArrowRightIcon data-icon="inline-end" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Toaster />
    </>
  )
}

export default App
